tsc -p ./

for %%i in ("%~dp0.") do SET "mypath=%%~fi"

start chorme file:///%mypath%/index.html

pause