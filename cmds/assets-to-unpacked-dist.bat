mkdir "unpacked-dist"
XCOPY manifest.json "unpacked-dist" /i/y 
XCOPY src\\popups "unpacked-dist" /s/i/y/exclude:cmds\\excludedfileslist.txt
XCOPY images "unpacked-dist" /s/i/y