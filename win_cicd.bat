@echo off
cls
rmdir /s /q dist

call npm i 
call npm run format 

echo Stage: start merge 
@REM git add .
@REM git commit -m "chore: pretty code by win ci/cd"
@REM git pull
@REM if errorlevel 1  ( 
@REM     pause exit
@REM ) 
@REM git push
@REM if errorlevel 1  ( 
@REM     pause exit 
@REM ) 
@REM git switch main
@REM git merge dev
@REM if errorlevel 1  ( 
@REM     git switch dev
@REM     echo conflict: main merge dev
@REM     pause > nul
@REM     exit 
@REM ) 
@REM git push
echo Stage: end merge


call npm run lint 
call npm run test:unit 

if errorlevel 1  ( 
    git switch dev
    echo Test Error
    pause 
    exit 
) 

call npm run build 

if errorlevel 1  ( 
    git switch dev
    pause 
    exit 
) 

"C:\Program Files (x86)\WinSCP\WinSCP.exe"/script=win_cicd.ftp

if %ERRORLEVEL% neq 0 (
    echo Error occurred during FTP transfer. 
    pause > nul
    exit
) 

rmdir /s /q dist

git switch dev

pause
exit