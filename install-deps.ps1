# E-commerce Dependencies Installation Script

Write-Host "Installing E-commerce Application Dependencies..." -ForegroundColor Green

# Backend dependencies
Write-Host "Installing Backend dependencies..." -ForegroundColor Yellow
Set-Location "Back-end"
& npm install
Set-Location ".."

# Frontend dependencies
Write-Host "Installing Frontend dependencies..." -ForegroundColor Yellow
Set-Location "Front-end"
& npm install
Set-Location ".."

# Admin dependencies
Write-Host "Installing Admin dependencies..." -ForegroundColor Yellow
Set-Location "Admin"
& npm install
Set-Location ".."

Write-Host "All dependencies installed successfully!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Update environment variables in .env files" -ForegroundColor White
Write-Host "2. Run 'npm run dev' in each directory to start development servers" -ForegroundColor White
Write-Host "3. Or use Docker: 'docker-compose up --build'" -ForegroundColor White
