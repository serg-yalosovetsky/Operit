param(
    [string]$Root = "."
)

$rootPath = Resolve-Path $Root
$searchRoots = @(
    (Join-Path $rootPath.Path "app\src"),
    (Join-Path $rootPath.Path "docs"),
    (Join-Path $rootPath.Path "tools")
)

$extensions = @(
    ".kt",
    ".kts",
    ".java",
    ".xml",
    ".json",
    ".md",
    ".txt",
    ".yml",
    ".yaml",
    ".gradle",
    ".properties",
    ".js",
    ".ts",
    ".tsx",
    ".jsx",
    ".html",
    ".css"
)

Get-ChildItem -Path $searchRoots -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
        $extensions -contains $_.Extension.ToLowerInvariant()
    } |
    ForEach-Object {
        Select-String -LiteralPath $_.FullName -Pattern '[\u4E00-\u9FFF]' | ForEach-Object {
            [PSCustomObject]@{
                File = $_.Path.Substring($rootPath.Path.Length + 1)
                Line = $_.LineNumber
                Text = $_.Line.Trim()
            }
        }
    } |
    Sort-Object File, Line |
    Format-Table -AutoSize
