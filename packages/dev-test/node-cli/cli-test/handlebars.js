const hb = require('handlebars'); 
const fs = require('fs'); 

let packageContent = fs.readFileSync(`./package-tmpl.json`, 'utf8'); // 同步方式以 utf-8 字符集获得下载好的项目目录下的 package.json 文件

console.log(packageContent)

let packageResult = hb.compile(packageContent)({dependencies: [{key: 2, value: 3}, {key: 5, value: 5}]}); // 将用户输入项与原内容混合获得新内容
fs.writeFileSync(`./package-2.json`, packageResult); // 重新同步方式写入到 package.json 文件中