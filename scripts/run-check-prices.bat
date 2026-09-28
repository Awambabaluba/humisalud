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
REM Todo aborto AVISA por Telegram (aviso_rutina.py): del 14/9 al 28/9/2026 esta
REM rutina fallo tres lunes seguidos y solo lo decia este log, que no mira nadie.
REM El repo tiene que estar en main. En otra rama, el pull de abajo puede
REM avanzar ESA rama, y entonces los precios se commitean en ella y el push de
REM main no sube nada: la rutina acaba en verde sin haber publicado.
set "RAMA="
for /f "delims=" %%b in ('git rev-parse --abbrev-ref HEAD') do set "RAMA=%%b"
if /i not "%RAMA%"=="main" (
  echo ATENCION: el repo esta en la rama "%RAMA%", no en main. Abortando para no mezclar los precios con el trabajo de esa rama. >> "%~dp0check-prices.log"
  "C:\Users\juand\AppData\Local\Python\pythoncore-3.14-64\python.exe" "c:\Users\juand\Proyectos\automation\aviso_rutina.py" --site humisalud --fallo sincronizar >> "%~dp0check-prices.log" 2>&1
  exit /b 1
)
REM Sincroniza ANTES de leer/escribir products.ts: sin esto, si main se movio
REM desde la ultima ejecucion, esta rutina lee y modifica una version vieja del
REM fichero y el push de mas abajo llega tarde (non-fast-forward) o choca con
REM otro cambio basado en la misma version vieja (mismo bug medido y corregido
REM el 3/8/2026 en el run-check-prices.bat de aspirabot-com).
git pull --ff-only origin main >> "%~dp0check-prices.log" 2>&1
if errorlevel 1 (
  echo ATENCION: git pull --ff-only fallo -^> main tiene commits que no se pueden traer en avance rapido. Abortando para no partir de una base vieja. >> "%~dp0check-prices.log"
  "C:\Users\juand\AppData\Local\Python\pythoncore-3.14-64\python.exe" "c:\Users\juand\Proyectos\automation\aviso_rutina.py" --site humisalud --fallo sincronizar >> "%~dp0check-prices.log" 2>&1
  exit /b 1
)
node scripts\check-prices.js >> "%~dp0check-prices.log" 2>&1
REM check-prices.js sale con 3 si no pudo leer NINGUN precio (Amazon bloqueando)
REM y con 1 si se rompio. Se avisa y se sigue: en los dos casos no ha escrito
REM nada, asi que lo de abajo no publica y la rutina acaba con ese codigo.
set "RC_PRECIOS=%ERRORLEVEL%"
if not "%RC_PRECIOS%"=="0" "C:\Users\juand\AppData\Local\Python\pythoncore-3.14-64\python.exe" "c:\Users\juand\Proyectos\automation\aviso_rutina.py" --site humisalud --fallo lectura --codigo %RC_PRECIOS% >> "%~dp0check-prices.log" 2>&1
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
  git commit -m "chore(precios): refresco semanal automatico" >> "%~dp0check-prices.log" 2>&1 && git push origin main >> "%~dp0check-prices.log" 2>&1
  if errorlevel 1 (
    echo ATENCION: no se pudo guardar o subir products.ts. Los precios nuevos NO estan publicados. >> "%~dp0check-prices.log"
    "C:\Users\juand\AppData\Local\Python\pythoncore-3.14-64\python.exe" "c:\Users\juand\Proyectos\automation\aviso_rutina.py" --site humisalud --fallo publicar >> "%~dp0check-prices.log" 2>&1
    exit /b 1
  )
) else (
  echo Sin cambios en products.ts, nada que publicar. >> "%~dp0check-prices.log"
)
exit /b %RC_PRECIOS%
