const sharingSidebar = [{
    collapsable: true,
    title: '资源共享', 
    sidebarDepth: 2,
    children: [
      '/sharing/',
      '/sharing/utils-web',
      '/sharing/sharing-blog',
      '/sharing/software',
    ]
  }, {
    collapsable: true,
    title: '配置与构建', 
    sidebarDepth: 2,
    children: [
      '/sharing/config/webpack-base',
      '/sharing/config/source-map-intrudoce'
    ]
  }, {
    collapsable: true,
    title: '规范', 
    sidebarDepth: 2,
    children: [
      '/sharing/standard/common-esmodule'
    ]
  }, {
    collapsable: true,
    title: '服务端', 
    sidebarDepth: 2,
    children: [
      '/sharing/backup/concurrent-properties',
    ]
  }, {
    collapsable: true,
    title: '测试', 
    sidebarDepth: 2,
    children: [
      '/sharing/test/sinon-introduce',
    ]
  }]

module.exports = {
    sharingSidebar
}