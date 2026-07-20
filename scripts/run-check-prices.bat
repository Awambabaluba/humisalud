@echo off
REM Rutina quincenal de refresco de precios de HumiSalud.
REM La lanza la tarea programada "HumiSalud-Precios-Quincenal" (Task Scheduler).
REM Actualiza src/data/products.ts leyendo Amazon con Chrome real (Playwright).
REM El commit + push a GitHub (y el auto-deploy de Cloudflare) lo hace el sistema
REM de backup cada 15 min; aqui solo refrescamos los precios.
cd /d "c:\Users\juand\Proyectos\humisalud\humidify-wisely-main"
echo. >> "%~dp0check-prices.log"
echo ==== %DATE% %TIME% ==== >> "%~dp0check-prices.log"
node scripts\check-prices.js >> "%~dp0check-prices.log" 2>&1
