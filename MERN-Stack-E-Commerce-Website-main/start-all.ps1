# MERN Stack E-Commerce - Start All Services Script
# This script starts the Backend, Frontend, and Admin panel in separate windows

Write-Host "Starting MERN Stack E-Commerce Application..." -ForegroundColor Green
Write-Host ""

# Check if Node.js is installed
try {
    $nodeVersion = node --version
    Write-Host "Node.js version: $nodeVersion" -ForegroundColor Cyan
} catch {
    Write-Host "ERROR: Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    exit 1
}

# Check if directories exist
if (-not (Test-Path "backend")) {
    Write-Host "ERROR: backend directory not found!" -ForegroundColor Red
    exit 1
}
if (-not (Test-Path "frontend")) {
    Write-Host "ERROR: frontend directory not found!" -ForegroundColor Red
    exit 1
}
if (-not (Test-Path "admin")) {
    Write-Host "ERROR: admin directory not found!" -ForegroundColor Red
    exit 1
}

Write-Host "Starting Backend Server (Port 4000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\backend'; Write-Host 'Backend Server - Port 4000' -ForegroundColor Green; npm start"

# Wait for backend to initialize
Start-Sleep -Seconds 3

Write-Host "Starting Frontend (Port 3000)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\frontend'; Write-Host 'Frontend - Port 3000' -ForegroundColor Green; npm start"

# Wait a bit
Start-Sleep -Seconds 2

Write-Host "Starting Admin Panel (Port 5173)..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PWD\admin'; Write-Host 'Admin Panel - Port 5173' -ForegroundColor Green; npm run dev"

Write-Host ""
Write-Host "All services are starting..." -ForegroundColor Green
Write-Host ""
Write-Host "Access the application at:" -ForegroundColor Cyan
Write-Host "  - Frontend: http://localhost:3000" -ForegroundColor White
Write-Host "  - Admin Panel: http://localhost:5173" -ForegroundColor White
Write-Host "  - Backend API: http://localhost:4000" -ForegroundColor White
Write-Host ""
Write-Host "Note: Make sure MongoDB is configured in backend/index.js" -ForegroundColor Yellow
Write-Host "Press any key to exit this window (services will continue running)..." -ForegroundColor Gray
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")




