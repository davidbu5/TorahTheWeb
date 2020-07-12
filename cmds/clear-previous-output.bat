@echo off
if exist "dist" (
    ECHO Deleting dist... 
    RD /S /Q "dist"
)
if exist "unpacked-dist" (
    ECHO Deleting unpacked-dist...
    RD /S /Q "unpacked-dist"
)