#!/bin/sh

cd "git-repo"
rm -rf bootstrap/
git checkout -- .
git pull
make bootstrap
cp bootstrap/* ../bootstrap-3/ -r