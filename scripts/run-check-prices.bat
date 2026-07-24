@echo off
REM Rutina semanal de refresco de precios de HumiSalud.
REM La lanza la tarea programada "HumiSalud-Precios-Semanal" (Task Scheduler).
REM Actualiza src/data/products.ts leyendo Amazon con Chrome real (Playwright).
REM Al final, este script hace commit+push de products.ts a main (opcion A):
REM main -> Cloudflare Pages despliega solo. El backup de 15 min es robocopy
REM local y NO toca GitHub, por eso el push tiene que hacerlo esta rutina.
cd /d "c:\Users\juand\Proyectos\humisalud\humidify-wisely-main"
echo. >> "%~dp0check-prices.log"
echo ==== %DATE% %TIME% ==== >> "%~dp0check-prices.log"
node scripts\check-prices.js >> "%~dp0check-prices.log" 2>&1
REM Tras refrescar precios, avisa por Telegram si la seccion /ofertas cambio
REM (nueva oferta, baja aun mas o termina). Lee el products.ts recien escrito.
"C:\Users\juand\AppData\Local\Python\pythoncore-3.14-64\python.exe" "c:\Users\juand\Proyectos\automation\ofertas_notify.py" --site humisalud >> "%~dp0check-prices.log" 2>&1
REM Opcion A (auto-push directo): publica el products.ts refrescado en main
REM para que la web se actualice sola (main -> Cloudflare Pages).
REM SOLO products.ts; NUNCA "git add -A" (hay ficheros sueltos ajenos en el arbol:
REM blog.ts, paginas legales que el usuario limpia a mano).
git add -- src/data/products.ts >> "%~dp0check-prices.log" 2>&1
git diff --cached --quiet -- src/data/products.ts
if errorlevel 1 (
  git commit -m "chore(precios): refresco semanal automatico" >> "%~dp0check-prices.log" 2>&1
  git push origin main >> "%~dp0check-prices.log" 2>&1
) else (
  echo Sin cambios en products.ts, nada que publicar. >> "%~dp0check-prices.log"
)
