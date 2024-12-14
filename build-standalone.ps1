$packageManager = if (Get-Command pnpm -ErrorAction SilentlyContinue) {
    "pnpm"
} elseif (Get-Command npm -ErrorAction SilentlyContinue) {
    "npm"
} elseif (Get-Command bun -ErrorAction SilentlyContinue) {
    "bun"
} else {
    Write-Host "Error: Neither npm, pnpm, nor bun are installed!"
    exit 1
}

Write-Host "$packageManager is available, continuing..."

$filePath = ".env.local"
$envData = 'BUILDMODE = "standalone"'

if (Test-Path $filePath) {
    Add-Content -Path $filePath -Value "`n$envData"
    Write-Host ".env.local updated with BUILDMODE=standalone."
} else {
    Set-Content -Path $filePath -Value $envData
    Write-Host ".env.local file created and BUILDMODE=standalone added."
}

Write-Host "Building Standalone ...."
$buildCommand = if ($packageManager -eq "pnpm") {
    "pnpm build"
} elseif ($packageManager -eq "npm") {
    "npm build"
} elseif ($packageManager -eq "bun") {
    "bun build"
} else {
    Write-Host "Error: Unsupported package manager!"
    return
}

Write-Host "Building with $($buildCommand)..."
Invoke-Expression $buildCommand

Write-Host "Moving files to .next/standalone..."
Copy-Item -Recurse -Force -Path "public" -Destination ".next/standalone/"
Copy-Item -Recurse -Force -Path ".next/static" -Destination ".next/standalone/.next/"

Write-Host "Files moved to .next/standalone."

Write-Host "Starting the Next.js server...."
$startCommand = if ($packageManager -eq "pnpm") {
    "pnpm start:standalone"
} elseif ($packageManager -eq "npm") {
    "npm start:standalone"
} elseif ($packageManager -eq "bun") {
    "bun start:standalone"
} else {
    Write-Host "Error: Unsupported package manager!"
    return
}

Write-Host "Starting with $($startCommand)..."
Invoke-Expression $startCommand
