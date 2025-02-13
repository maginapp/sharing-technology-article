---
meta:
  - name: keywords
    content: 前端工程化,CLI,node
  - name: description
    content: 构建自己的CLI工具
---

# 构建自己的CLI工具

## 什么是CLI

> 前端工程化

CLI 是 command line interface 的简称，也就是命令行界面。用户可在提示符下键入可执行指令，然后计算机执行，它通常不支持鼠标。


## 项目初始化

### 创建配置文件

```shell
npm init -y
```

> -y 创建默认配置的`package.json`

```json
{
  "name": "self-cli",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### 创建可执行脚本

项目根目录创建`index.js`

```js
#!/usr/bin/env node

// #!/usr/bin/env node ==> 标识该脚本使用node解释执行

// 使用node开发的cmd执行JavaScript脚本
// 必须在顶部加入 #!/usr/bin/env

console.log('hello magina')
```

### 添加bin命令

在`package.json`中添加如下命令

```json
{
  "bin": {
    "mgn": "./index.js"
  }
}
```

### npm link添加全局shell指令

执行`npm link`命令，将本地模块与npm模块进行关联，执行完成后，项目中将会多出个`package-lock.json`文件，其内容如下：

```json
{
  "name": "magina-cli",
  "version": "1.0.0",
  "lockfileVersion": 1,
```

同时本地`nodejs`安装目录下会多出 `mgn` `mgn.cmd`两个文件

此时我们可以在命令行中执行`mgn`命令

```shell
mgn
// 输出 hello magina
```

## 添加命令行指令

自定义的cli工具还需要支持部分指令，方便用户查询信息。这里我们选用[commander](https://www.npmjs.com/package/commander)实现此功能

> npm install commander -S

```txt
Options:
  -V, --version                    output the version number
  -h, --help                       display help for command

Commands:
  init <template> <project>        初始化项目模板
  list                             查看所有可用模板
  help [command]                   display help for command
```

### 指令-版本查询

```js
const cmd = require('commander')

// 命令： mgn -V|--version
cmd.version('1.0.0') // 传入当前版本

// process.argv获取命令行参数
cmd.parse(process.argv)

console.log(process.argv)
```

```shell
# 执行命令：
mgn sadasdasd sd -Sd -d
# // process.argv输出
# // [
# //   'F:\\soft\\node\\nodejs\\node.exe',
# //   'F:\\soft\\node\\nodejs\\node_modules\\node-cli\\index.js',
# //   'sadasdasd',
# //   'sd',
# //   '-Sd',
# //   '-d'
# // ]

mgn -V
# 输出 1.0.0
```

### 指令-获取模板列表

```js
// 带渲染模板
const templates = {
  'tpl-1': {
      url: 'https://github.com/maginapp/vue-start',
      downloadUrl: 'maginapp/vue-start#master',
      description: 'mgn-cli脚手架测试模板1'
  },
  'tpl-2': {
      url: 'https://github.com/maginapp/vue-start',
      downloadUrl: 'https://github.com/maginapp/vue-start#master',
      description: 'mgn-cli脚手架测试模板2'
  }
}

// 命令： mgn list
cmd
.command('list')
.description('查看所有可用模板')
.action(() => {
  const templateName = Object.keys(templates)
  console.log(templateName)
})
```

### 指令-模板初始化

```js
// 命令： mgn init <template> <project>
cmd
  .command('init <template> <project>') // 参数
  .description('初始化项目模板')
  .action((templateName, projectName) => {
      const { downloadUrl } = templates[templateName]  
      console.log(downloadUrl, projectName) 
      // 执行模板下载操作
  })

```

### commander其他示例

```js
cmd
  .command('add')
  .option('-d, --debug', 'display some debugging')
  .option('-t, --title <honorific>', 'title to use before name')
  .argument('<first>', 'integer argument', parseInt)
  .argument('[second]', 'integer argument', (origin) => {
    return +origin
  }, 666)
  .action((first, second, options, command) => {
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options)
    }
    const title = options.title ? `${options.title} ` : ''
    console.log(`Answer ${title}! ${first} + ${second} result is ${first + second}`)
  })



cmd
  .command('rmdir')
  .argument('<dirs...>')
  .action(function (dirs) {
    dirs.forEach((dir) => {
      console.log('rmdir %s', dir)
    })
  })
```

此时我们自定义cli指令拥有了这些功能

```
Options:
  -V, --version                   output the version number
  -h, --help                      display help for command

Commands:
  init <template> <project>       初始化项目模板
  list                            查看所有可用模板
  add [options] <first> [second]
  rmdir <dirs...>
  help [command]                  display help for command
```

## 模板下载

> npm install download-git-repo -S

详见[download-git-repo](https://www.npmjs.com/package/download-git-repo)

```js

const download = require('download-git-repo')
// 命令： mgn init <template> <project>
cmd
  .command('init <template> <project>') // 参数
  .description('初始化项目模板')
  .action((templateName, projectName) => {
      const { downloadUrl } = templates[templateName]  
      download(downloadUrl, projectName, {clone: true}, err => {
          if(err){
              console.log('模板下载失败')
          }else{
              console.log('模板下载成功')
          }
      })
  })
```

## 添加交互操作

为了方便cli工具使用，还需要提供命令行交互功能。这里我们使用了[inquirer](https://www.npmjs.com/package/inquirer#documentation)创建问答式的内容

> npm install inquirer -S

```js
// 问答操作
const inquirer = require('inquirer')
cmd
  .command('inquirer')
  .argument('<dirs...>')
  .action(function (dirs) {
    console.log(dirs)
    // 用户交互
    inquirer
      .prompt([
        {
          type: 'input', // 输入
          name: 'author',
          message: 'author name?'
        },
        {
          type: 'list', // 可选列表
          name: 'template',
          message: 'choose a template',
          choices: Object.keys(templates).concat('custom')
        }
      ])
      .then((answers) => {
        //根据回答以及选项answers，参数dirs来生成项目文件
        console.log(answers)
        if (answers.template !== 'custom') {
          console.log('执行模板下载')
        } else {
          console.log('执行自定义操作')
          return createUserCustom()
        }
      })
      .catch((error) => {
        console.error(error)
      })
  })

const createUserCustom = () => {
  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'eslint',
        message: 'choose a eslint',
        choices: ['eslint', 'prettier']
      },
      {
        type: 'list',
        name: 'test',
        message: 'choose a test',
        choices: ['unit', 'e2e', 'all', 'none']
      }
    ])
    .then((answers) => {
      console.log(answers)
    })
    .catch((error) => {
      console.error(error)
    })
}  
```

## package.json修改

用户完成自定义配置操作后，可以使用到模板插件[handlebars](https://www.npmjs.com/package/handlebars)动态生成新的`package.json`文件

> npm i handlebars -S

```js
const handlebars = require('handlebars')
const fs = require('fs')

// 同步方式以 utf-8 字符集获得下载好的项目目录下的 package.json 文件
let packageContent = fs.readFileSync(`./package.json`, 'utf8')/

console.log(packageContent)

// 将用户输入项与原内容混合获得新内容
const compiler = handlebars.compile(packageContent)
let packageResult = compiler({dependencies: [{key: 2, value: 3}, {key: 5, value: 5}]})

// 重新同步方式写入到 package.json 文件中
fs.writeFileSync(`./package.json`, packageResult)
```

## 任务状态处理

### ora加载状态

> npm i ora -S

```js
const ora = require('ora')
// 创建进度条
const processGenFiles = ora('Create project……')
 // 进度条开始
processGenFiles.start()

setTimeout(() => {
  // 完成操作
  processGenFiles.succeed(`Create project complete: i18n-b-`)
}, 1000)

```

### progress进度条

> npm i progress -S 

```js
const Process = require("progress")

const bar = new Process(
  // 进度栏效果
  "[downloading [:bar] :rate/bps :percent :etas]", 
  {  
    // 任务数量
    total: 20,
    // 所有完成回调
    callback: () => {
      console.log("callback")
    } 
  }
)

const next = (bar) => {
  setTimeout(function() {
    bar.tick() // 任务完成，更新进度
    if (bar.complete) {
      console.log("complete")
    } else {
      next(bar)
    }
  }, Math.random() * 100)
}
// [downloading [====================] 19/bps 100% 0.0s]
// callback
// complete
```



## 操作标识

### chilk颜色标识

> npm i chalk -S

```js
const chalk = require('chalk')

const error = chalk.bold.red
const warning = chalk.keyword('orange')

console.log(error('Error!'))
console.log(warning('Warning!'))

const log = console.log

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'))

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'))

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'))

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'))

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
))

// ES2015 template literal
log(`
  CPU: ${chalk.red('90%')}
  RAM: ${chalk.green('40%')}
  DISK: ${chalk.yellow('70%')}
`)

// ES2015 tagged template literal
// log(chalk`
// CPU: {red ${cpu.totalPercent}%}
// RAM: {green ${ram.used / ram.total * 100}%}
// DISK: {rgb(255,131,0) ${disk.used / disk.total * 100}%}
// `);

// Use RGB colors in terminal emulators that support it.
log(chalk.keyword('orange')('Yay for orange colored text!'))
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'))
log(chalk.hex('#DEADED').bold('Bold gray!'))


const name = 'Sindre';
console.log(chalk.green('Hello %s'), name)
//=> 'Hello Sindre'
```

### log-symbols图标

> npm i log-symbols -S

```js
const ls = require('log-symbols')      // 命令行输出符号

console.log(ls.info, 'Finished info!')
console.log(ls.success, 'Finished success!')
console.log(ls.warning, 'Finished warning!')
console.log(ls.error, 'Finished error!')
```

## 引用

* [从构建自定义 cli 到 npm 包的发布使用](https://juejin.cn/post/6901997583527641101)

* [使用node开发自定义cli工具](https://lixuguang.github.io/2020/02/19/develop-custom-cli-tools-using-node/)

* ["私人定制"CLI工具](https://zhuanlan.zhihu.com/p/84397064)

npmjs

* [commander](https://www.npmjs.com/package/commander)

* [download-git-repo](https://www.npmjs.com/package/download-git-repo)

* [inquirer](https://www.npmjs.com/package/inquirer#documentation)

* [handlebars](https://www.npmjs.com/package/handlebars)

* [ora](https://www.npmjs.com/package/ora)

* [process](https://www.npmjs.com/package/process)

* [chalk](https://www.npmjs.com/package/chalk)

* [log-symbols](https://www.npmjs.com/package/log-symbols)


QA

* [git:error 128](https://github.com/wuqiong7/Note/issues/17)

* [failed with status 128](https://blog.csdn.net/lydxwj/article/details/115050728)