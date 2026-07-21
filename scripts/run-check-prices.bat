@echo off
REM Rutina semanal de refresco de precios de HumiSalud.
REM La lanza la tarea programada "HumiSalud-Precios-Semanal" (Task Scheduler).
REM Actualiza src/data/products.ts leyendo Amazon con Chrome real (Playwright).
REM El commit + push a GitHub (y el auto-deploy de Cloudflare) lo hace el sistema
REM de backup cada 15 min; aqui solo refrescamos los precios.
cd /d "c:\Users\juand\Proyectos\humisalud\humidify-wisely-main"
echo. >> "%~dp0check-prices.log"
echo ==== %DATE% %TIME% ==== >> "%~dp0check-prices.log"
node scripts\check-prices.js >> "%~dp0check-prices.log" 2>&1
REM Tras refrescar precios, avisa por Telegram si la seccion /ofertas cambio
REM (nueva oferta, baja aun mas o termina). Lee el products.ts recien escrito.
"C:\Users\juand\AppData\Local\Python\pythoncore-3.14-64\python.exe" "c:\Users\juand\Proyectos\automation\ofertas_notify.py" --site humisalud >> "%~dp0check-prices.log" 2>&1
