#!/usr/bin/env bash
# 清理上一版
rm -rf __deployme
mkdir __deployme

# 建置
sh scripts/build.sh

# 壓縮 JS
uglifyjs bundle.js -o __deployme/bundle.js
# 壓縮 CSS
cssshrink bundle.css > __deployme/bundle.css
# 複製 HTML 和圖像
cp index.html __deployme/index.html
cp -r images/ __deployme/images/
# 完成

date; echo;