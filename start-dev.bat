@echo off
title E-commerce Development Server
color 0A

echo.
echo =====================================================
echo  🚀 Starting E-commerce Development Servers...
echo =====================================================
echo.

:: Check if dependencies are installed
echo Checking dependencies...

if not exist "Back-end\node_modules" (
    echo Installing Backend dependencies...
    cd Back-end
    call npm install
    cd ..
)

if not exist "Front-end\node_modules" (
    echo Installing Frontend dependencies...
    cd Front-end
    call npm install
    cd ..
)

if not exist "Admin\node_modules" (
    echo Installing Admin dependencies...
    cd Admin
    call npm install
    cd ..
)

echo Dependencies checked!
echo.

:: Start all services in tabs of the same window
echo Starting all services in tabs...
echo.

:: Check if Windows Terminal is available
where wt >nul 2>nul
if %errorlevel% equ 0 (
    echo Using Windows Terminal with tabs...
    wt new-tab --title "Backend API" -d "Back-end" cmd /k "node .\index.js" ; new-tab --title "Frontend Store" -d "Front-end" cmd /k "npm run dev" ; new-tab --title "Admin Dashboard" -d "Admin" cmd /k "npm run dev"
) else (
    echo Windows Terminal not found, using alternative method...
    :: Alternative method using cmd with tabs (requires Windows 10+)
    start "Development Servers" cmd /k "title Backend API && cd Back-end && node .\index.js"
    timeout /t 2 /nobreak > nul
    start "" cmd /k "title Frontend Store && cd Front-end && npm run dev"
    timeout /t 2 /nobreak > nul
    start "" cmd /k "title Admin Dashboard && cd Admin && npm run dev"
)

echo.
echo ✅ All services are starting up!
echo =====================================================
echo 🔗 Application URLs:
echo    Backend API:      http://localhost:4000
echo    Frontend Store:   http://localhost:5173  
echo    Admin Dashboard:  http://localhost:5174
echo =====================================================
echo.
echo 💡 Tips:
echo    - Services run in tabs of the same window (if Windows Terminal is available)
echo    - Switch between tabs to see different service outputs
echo    - Close individual tabs or the entire window to stop services
echo    - Press Ctrl+C in any tab to stop that specific service
echo.
echo 🎉 Development environment is ready!
echo.
pause
