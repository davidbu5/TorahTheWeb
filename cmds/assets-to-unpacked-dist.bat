@echo off
mkdir "unpacked-dist"
XCOPY manifest.json "unpacked-dist" /i/y 
XCOPY src\\popup "unpacked-dist" /s/i/y/exclude:cmds\\excludedfileslist.txt
XCOPY static\\images "unpacked-dist" /s/i/y