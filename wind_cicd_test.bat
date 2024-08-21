@echo off
"C:\Program Files (x86)\WinSCP\WinSCP.exe"/script=win_cicd.ftp
if %ERRORLEVEL% neq 0 (
    echo Error occurred during FTP transfer. 
    pause 
    exit
) else (
    echo FTP transfer completed successfully.
)