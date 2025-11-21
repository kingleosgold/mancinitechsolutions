# Mancini Tech Solutions - Website Update Script
# This script copies the new component files to your project

Write-Host "🚀 Mancini Tech Solutions - Website Update" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

# Define paths
$projectPath = "C:\Users\Jon\iCloudDrive\Documents\Mancini Tech Solutions\MTS\MTS Website\mancini-website"
$componentsPath = "$projectPath\src\components"
$downloadsPath = "$env:USERPROFILE\Downloads"

# Check if project exists
if (!(Test-Path $projectPath)) {
    Write-Host "❌ Error: Project directory not found at:" -ForegroundColor Red
    Write-Host "   $projectPath" -ForegroundColor Red
    Write-Host ""
    Write-Host "Please update the `$projectPath variable in this script." -ForegroundColor Yellow
    pause
    exit
}

Write-Host "✅ Found project directory" -ForegroundColor Green
Write-Host ""

# List of files to copy
$files = @(
    "Hero.jsx",
    "HowItWorks.jsx",
    "Services.jsx",
    "Portfolio.jsx",
    "About.jsx",
    "Pricing.jsx"
)

Write-Host "📁 Copying component files..." -ForegroundColor Cyan
Write-Host ""

$copiedCount = 0
$errorCount = 0

foreach ($file in $files) {
    $sourcePath = "$downloadsPath\$file"
    $destPath = "$componentsPath\$file"
    
    if (Test-Path $sourcePath) {
        try {
            Copy-Item -Path $sourcePath -Destination $destPath -Force
            Write-Host "  ✅ Copied: $file" -ForegroundColor Green
            $copiedCount++
        } catch {
            Write-Host "  ❌ Error copying $file : $_" -ForegroundColor Red
            $errorCount++
        }
    } else {
        Write-Host "  ⚠️  Not found: $file (skipped)" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "✅ Copied $copiedCount files" -ForegroundColor Green
if ($errorCount -gt 0) {
    Write-Host "❌ $errorCount errors" -ForegroundColor Red
}
Write-Host ""

Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Open your project in VS Code" -ForegroundColor White
Write-Host "2. Run: npm run dev" -ForegroundColor White
Write-Host "3. Test the website locally" -ForegroundColor White
Write-Host "4. Commit changes: git add . && git commit -m 'Update website'" -ForegroundColor White
Write-Host "5. Push to GitHub: git push origin redesign-tech-partner" -ForegroundColor White
Write-Host ""

Write-Host "📖 See DEPLOYMENT_GUIDE.md for full instructions" -ForegroundColor Yellow
Write-Host ""

pause
