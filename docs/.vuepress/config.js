const basePath = 'sharing-technology-article'

module.exports = {
    // meta
    title: '我的博客', 
    description: '万事皆虚，万事皆允',
    // vuepress config
    dest: basePath,
    base: `/${basePath}/`,
    serviceWorker: true,
    evergreen: true
}