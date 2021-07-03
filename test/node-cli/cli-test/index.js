#!/usr/bin/env node

//使用node开发命令行工具所执行JavaScript脚本必须在顶部加入 #!/usr/bin/env node 声明该命令行脚本是node.js写的
const cmd = require('commander');
const download = require('download-git-repo');


// mgn -V|--version
cmd.version('0.1.0');  // -V|--version时输出版本号0.1.0

// console.log(process.argv)
// console.log(cmd.parse(process.argv))




  
// mgn list
// cmd
// .command('list')
// .description('查看所有可用模板')
// .action(() => {
//     console.log(`
//         a   a模板
//         b   b模板
//         c   c模板
//     `)
// })

cmd
  .option('-D, --debug', 'output extra debugging')
  .option('-S, --small', 'small pizza size')
  .option('-P, --pizza-type <type>', 'flavour of pizza')


cmd
.command('AA, --a-a')
.description('查看所有可用模板')
.action(() => {
    console.log(`
        a   a模板
        b   b模板
        c   c模板
    `)
})
  

cmd
  .version('0.1.0')
  .command('rmdir')
  .argument('<dirs...>')
  .action(function (dirs) {
    dirs.forEach((dir) => {
      console.log('rmdir %s', dir);
    });
  });


 cmd
  .command('add')
  .argument('<first>', 'integer argument', parseInt)
  .argument('[second]', 'integer argument', parseInt, 1000)
  .action((first, second) => {
    console.log(first, second)
    console.log(`${first} + ${second} = ${first + second}`);
  })


  cmd
  .command('add2')
  .option('-d, --debug', 'display some debugging')
  .option('-t, --title <honorific>', 'title to use before name')
  .argument('<first>', 'integer argument', parseInt)
  .argument('[second]', 'integer argument', parseInt)
  .action((first, second, options, command, res) => {
    console.log(res)
    console.log(arguments.length)
    console.log(first, second, options)
    console.log(`${first} + ${second} = ${first + second}`);
    if (options.debug) {
      console.error('Called %s with options %o', command.name(), options);
    }
    const title = options.title ? `${options.title} ` : '';
    console.log(`Thank-you ${title}${first}`);
  })



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

// // mgn init <template> <project>
// cmd
//   .command('init <template> <project>') // 参数
//   .description('初始化项目模板')
//   .action((templateName, projectName) => {
//       console.log(templateName, projectName);
//   })

// mgn init <template> <project>
cmd
  .command('init <template> <project>') // 参数
  .description('初始化项目模板')
  .action((templateName, projectName) => {
      // console.log(templateName, projectName);
      let {downloadUrl} = templates[templateName];       
      console.log(downloadUrl, projectName) 
        // 第一个参数是github仓库地址，第二个参数是创建的项目目录名，第三个参数是clone
        download(downloadUrl, projectName, {clone: true}, err => {
        // download('direct:' + downloadUrl, projectName, {clone: true}, err => {
            if(err){
                console.log('模板下载失败');
            }else{
                console.log('模板下载成功');
            }
        })
  })


  // mgn list
cmd
.command('list')
.description('查看所有可用模板')
.action(() => {
  // console.log(`
  //       a   a模板
  //       b   b模板
  //       c   c模板
  //   `)
  // 通过获取templates里的key可以获取到模板名称
  const templateName = Object.keys(templates)
  console.log(templateName)
})


cmd.parse(process.argv)