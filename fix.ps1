$content = Get-Content -Raw "style.css"
$first = $content.IndexOf("/* Section Subtitles */")
$last = $content.LastIndexOf("/* Section Subtitles */")
if ($first -ne -1 -and $first -lt $last) {
    $newContent = $content.Substring(0, $first) + $content.Substring($last)
    Set-Content "style.css" -Value $newContent -NoNewline
    Write-Output "Fixed"
} else {
    Write-Output "No action needed"
}
