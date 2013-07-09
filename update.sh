#!/bin/sh

rm -rf bootstrap-3/fonts
rm -rf bootstrap-3/css/bootstrap-glyphicons.css
cd "git-repo/bootstrap"
rm -rf bootstrap/
git checkout -- .
git pull
make bootstrap
cp bootstrap/* ../../bootstrap-3/ -r
cd "../bootstrap-glyphicons"
git checkout -- .
git pull
cp -r "fonts" ../../bootstrap-3
cp "css/bootstrap-glyphicons.css" ../../bootstrap-3/css