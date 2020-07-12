rd dist /s/q
mkdir dist
start chrome --pack-extension="%CD%\unpacked-dist" --pack-extension-key="%CD%\key.pem"
TIMEOUT 4
move ".\unpacked-dist.crx" ".\dist\extension.crx"
echo Please delete the unpacked-dist folder!
