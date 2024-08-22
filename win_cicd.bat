@echo off
cls

set /p mergecode= Need merge code ? Y/N: 

rmdir /s /q dist

call npm i 
call npm run format 

if mergecode == "Y" (
    echo Stage: start merge 
    git add .
    git commit -m "chore: pretty code by win ci/cd"
    git pull
    if errorlevel 1  ( 
        goto catcherror
    ) 
    git push
    if errorlevel 1  ( 
        goto catcherror
    ) 
    git switch main
    git merge dev
    if errorlevel 1  ( 
        goto catcherror
    ) 
    git push
    echo Stage: end merge
)

call npm run lint 
call npm run test:unit 

if errorlevel 1  ( 
    goto catcherror
) 

call npm run build 

if errorlevel 1  ( 
    goto catcherror
) 

"C:\Program Files (x86)\WinSCP\WinSCP.exe"/script=win_cicd.ftp

if %ERRORLEVEL% neq 0 (
    echo Error occurred during FTP transfer. 
    pause > nul
    exit
) 

rmdir /s /q dist

git switch dev
echo Please any key to exit . . .
pause > nul
exit

:catcherror
git switch dev
pause
exit