#!/usr/bin/env bash
# QA
eslint js/source js/__tests__
flow
npm test
# js轉換
babel js/source -d js/build
# js打包
browserify js/build/app.js -o bundle.js
browserify js/build/discover.js -o discover-bundle.js
# css打包
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
# 完成
date; echo;