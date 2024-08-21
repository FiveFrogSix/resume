@echo off
cls
rmdir /s /q dist
@REM set /p input_branch = branch: 
@REM git switch %input_branch%
@REM if errorlevel 1 (
@REM     pause
@REM     exit
@REM )
git pull 
call npm i 
call npm run format 

@REM git add .
@REM git commit -m "chore: pretty code by win ci/cd"
@REM git pull
@REM if errorlevel 1  ( pause exit ) 
@REM git push
@REM if errorlevel 1  ( pause exit ) 

call npm run lint 
call npm run test:unit 
@REM if errorlevel 1  ( pause exit ) 

call npm run build 
if errorlevel 1  ( 
    pause 
    exit 
) 
if errorlevel 1  ( 
    pause  
    exit 
) 

SET /P AREYOUSURE=Are you sure deploy (Y/N)?: 
if /I "%AREYOUSURE%" NEQ "Y" ( exit )

@REM require WinSCP

"C:\Program Files (x86)\WinSCP\WinSCP.exe"/script=win_cicd.ftp

if %ERRORLEVEL% neq 0 (
    echo Error occurred during FTP transfer. 
    pause > nul
    exit
) else (
    echo FTP transfer completed successfully.
)
rmdir /s /q dist
pause
exit