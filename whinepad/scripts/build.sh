#!/usr/bin/env bash
# js轉換
babel --presets react,es2015 js/source -d js/build
# js打包
browserify js/build/app.js -o bundle.js
browserify js/build/discover.js -o discover-bundle.js
# css打包
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
# 完成
date; echo;