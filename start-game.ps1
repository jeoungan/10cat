# Windows PowerShell 5.1 and PowerShell 7 compatible.
$ErrorActionPreference = 'Stop'
$gameRoot = [System.IO.Path]::GetFullPath($PSScriptRoot)
$gameUrl = 'http://127.0.0.1:4173/'
$gamePort = 4173
$gameTitle = '나른한 오후'
$logDirectory = Join-Path $gameRoot 'output'

function Get-GameResponse {
    try {
        $response = Invoke-WebRequest -Uri $gameUrl -UseBasicParsing -TimeoutSec 1 -ErrorAction Stop
        if ($response.StatusCode -eq 200 -and $response.Content -match ('(?is)<title>\s*' + [regex]::Escape($gameTitle) + '(?:\s|<|—|·|\-)')) {
            return 'game'
        }
        return 'other'
    } catch {
        if ($null -ne $_.Exception.Response) { return 'other' }
        return 'unavailable'
    }
}

function Test-GamePortOccupied {
    $listeners = [System.Net.NetworkInformation.IPGlobalProperties]::GetIPGlobalProperties().GetActiveTcpListeners()
    return [bool]($listeners | Where-Object { $_.Port -eq $gamePort })
}

try {
    $serverPath = Join-Path $gameRoot 'server.mjs'
    if (-not (Test-Path -LiteralPath $serverPath -PathType Leaf)) {
        throw '게임 파일 server.mjs를 찾을 수 없어요. Play.cmd와 게임 파일을 같은 폴더에 두어 주세요.'
    }

    $serviceState = Get-GameResponse
    if ($serviceState -eq 'other' -or ($serviceState -ne 'game' -and (Test-GamePortOccupied))) {
        throw '포트 4173을 다른 프로그램이 사용하고 있어요. 해당 프로그램을 직접 종료한 뒤 다시 실행해 주세요. 실행기는 다른 프로그램을 종료하지 않습니다.'
    }

    if ($serviceState -ne 'game') {
        $nodeCommand = Get-Command node.exe -CommandType Application -ErrorAction SilentlyContinue | Select-Object -First 1
        $nodePath = if ($null -ne $nodeCommand) { $nodeCommand.Source } else { $null }
        if (-not $nodePath) {
            $bundledNode = Join-Path $env:USERPROFILE '.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe'
            if (Test-Path -LiteralPath $bundledNode -PathType Leaf) { $nodePath = $bundledNode }
        }
        if (-not $nodePath) {
            throw 'Node.js 실행 파일을 찾을 수 없어요. Node.js를 설치하거나 Codex의 번들 런타임을 준비한 뒤 다시 실행해 주세요.'
        }

        [void](New-Item -ItemType Directory -Path $logDirectory -Force)
        $launchStamp = Get-Date -Format 'yyyyMMdd-HHmmss-fff'
        $standardLog = Join-Path $logDirectory ("server-$launchStamp.log")
        $errorLog = Join-Path $logDirectory ("server-$launchStamp.error.log")
        $previousPort = [Environment]::GetEnvironmentVariable('PORT', 'Process')
        try {
            [Environment]::SetEnvironmentVariable('PORT', [string]$gamePort, 'Process')
            $serverProcess = Start-Process -FilePath $nodePath -ArgumentList ('"{0}"' -f $serverPath) -WorkingDirectory $gameRoot -WindowStyle Hidden -RedirectStandardOutput $standardLog -RedirectStandardError $errorLog -PassThru
        } finally {
            [Environment]::SetEnvironmentVariable('PORT', $previousPort, 'Process')
        }

        $startupTimer = [System.Diagnostics.Stopwatch]::StartNew()
        do {
            $serviceState = Get-GameResponse
            if ($serviceState -eq 'game') { break }
            if ($serviceState -eq 'other') {
                throw '포트 4173에서 다른 앱이 응답했어요. 안전하게 실행을 멈췄습니다. output 폴더의 서버 로그를 확인해 주세요.'
            }
            $serverProcess.Refresh()
            if ($serverProcess.HasExited) {
                throw ("게임 서버가 시작되지 않았어요. 로그를 확인해 주세요: {0}" -f $errorLog)
            }
            if ($startupTimer.Elapsed.TotalSeconds -ge 10) { break }
            Start-Sleep -Milliseconds 200
        } while ($startupTimer.Elapsed.TotalSeconds -lt 10)
        if ($serviceState -ne 'game') {
            throw ("10초 안에 게임 서버를 확인하지 못했어요. 로그를 확인해 주세요: {0}" -f $errorLog)
        }
    }

    Write-Host '나른한 오후를 열고 있어요. 즐거운 집사 생활 되세요!'
    Write-Host ("게임 주소: {0}" -f $gameUrl)
    try {
        Start-Process -FilePath $gameUrl -ErrorAction Stop
    } catch {
        Write-Warning '게임 서버는 정상 실행 중이에요. 이 실행 환경에서는 브라우저를 자동으로 열 수 없으므로 위 주소를 브라우저에서 열어 주세요.'
    }
    exit 0
} catch {
    Write-Host ("실행 오류: {0}" -f $_.Exception.Message) -ForegroundColor Red
    try {
        [void](New-Item -ItemType Directory -Path $logDirectory -Force)
        $_.Exception.Message | Set-Content -LiteralPath (Join-Path $logDirectory 'launcher-error.log') -Encoding UTF8
    } catch { }
    Write-Host '자세한 오류는 output\launcher-error.log에 기록됩니다.'
    Start-Sleep -Seconds 8
    exit 1
}
