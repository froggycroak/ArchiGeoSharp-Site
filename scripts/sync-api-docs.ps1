# 从源码仓同步 API markdown（在 ArchiGeoSharp-site 根目录执行）
# Usage: pwsh ./scripts/sync-api-docs.ps1
$ErrorActionPreference = "Stop"
$siteRoot = Split-Path $PSScriptRoot -Parent
$srcApi = Join-Path $siteRoot "..\ags_v011\docs\api"
$dstApi = Join-Path $siteRoot "docs\api"

if (-not (Test-Path $srcApi)) {
  throw "Source API docs not found: $srcApi"
}

New-Item -ItemType Directory -Path $dstApi -Force | Out-Null
Copy-Item (Join-Path $srcApi "*.md") $dstApi -Force
Write-Host "Synced API docs from $srcApi -> $dstApi"
