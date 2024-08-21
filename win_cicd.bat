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

git add .
git commit -m "chore: pretty code by win ci/cd"
git pull
if errorlevel 1  ( pause exit ) 
git push
if errorlevel 1  ( pause exit ) 

call npm run lint
call npm run test:unit
@REM if errorlevel 1  ( pause exit ) 

call npm run build
if errorlevel 1  ( pause exit ) 
call win_cicd.config.bat
if errorlevel 1  ( pause  exit ) 
echo %FTP_SERVER%
pause
exit