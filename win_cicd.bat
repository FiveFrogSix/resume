@echo off
cls
rmdir /s /q dist

@REM Check 
call npm i 
call npm run format 

@REM Stage: 
echo Stage: Start
@REM git add .
@REM git commit -m "chore: pretty code by win ci/cd"
@REM git pull
@REM if errorlevel 1  ( pause exit ) 
@REM git push
@REM if errorlevel 1  ( pause exit ) 
@REM git switch main
@REM git merge dev
if errorlevel 1  ( 
    echo conflict: main merge dev
    pause > nul
    exit 
) 
@REM git push

call npm run lint 
call npm run test:unit 
@REM if errorlevel 1  ( pause exit ) 

call npm run build 

if errorlevel 1  ( 
    pause 
    exit 
) 


@REM require WinSCP becuase can't use ftp command
"C:\Program Files (x86)\WinSCP\WinSCP.exe"/script=win_cicd.ftp

if %ERRORLEVEL% neq 0 (
    echo Error occurred during FTP transfer. 
    pause > nul
    exit
) 

rmdir /s /q dist

@REM git switch dev
echo Stage: End

pause
exit