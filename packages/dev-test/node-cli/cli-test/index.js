#!/usr/bin/env node

//使用node开发命令行工具所执行JavaScript脚本必须在顶部加入 #!/usr/bin/env node 声明该命令行脚本是node.js写的
const cmd = require('commander');
const download = require('download-git-repo')


// mgn -V|--version
cmd.version('0.1.0')  // -V|--version时输出版本号0.1.0

// 可用模板
const templates = {
  'tpl-1': {
      url: 'https://github.com/maginapp/vue-start',
      downloadUrl: 'https://mygitlab.com:flippidippi/download-git-repo-fixture#my-branch',
      description: 'mgn-cli脚手架测试模板1'
  },
  'tpl-2': {
      url: 'https://github.com/maginapp/vue-start',
      downloadUrl: 'https://github.com/maginapp/vue-start#master',
      description: 'mgn-cli脚手架测试模板2'
  }
}

// mgn init <template> <project>
cmd
  .command('init <template> <project>') // template project 参数
  .description('初始化项目模板')
  .action((templateName, projectName) => {
      // console.log(templateName, projectName);
      let {downloadUrl} = templates[templateName]     
      console.log(downloadUrl, projectName) 
        // 第一个参数是github仓库地址，第二个参数是创建的项目目录名，第三个参数是clone
      download(downloadUrl, projectName, {clone: true}, err => {
      // download('direct:' + downloadUrl, projectName, {clone: true}, err => {
          if(err){
              console.log('模板下载失败')
          }else{
              console.log('模板下载成功')
          }
      })
  })


// mgn list
cmd
.command('list')
.description('查看所有可用模板')
.action(() => {
  const templateName = Object.keys(templates)
  console.log(templateName)
})


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
          type: 'input',
          name: 'author',
          message: 'author name?'
        },
        {
          type: 'list',
          name: 'template',
          message: 'choose a template',
          choices: Object.keys(templates).concat('custom')
        }
      ])
      .then((answers) => {
        //根据回答以及选项，参数来生成项目文件
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
      //根据回答以及选项，参数来生成项目文件
      console.log(answers)
    })
    .catch((error) => {
      console.error(error)
    })
}  



console.log(process.argv)
cmd.parse(process.argv)