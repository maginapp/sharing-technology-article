
// 处理空数据问题
const formatData = (arr) => {
    return arr.filter(item => {
        if (typeof item === 'string') return item
        else {
            if (item.children) item.children = formatData(item.children)
            return item
        } 
    })
}

const formatSideBar = (obj) => {
    for (let k in obj) {
        obj[k] = formatData(obj[k] )
    }
    return obj
}

module.exports = formatSideBar({
    '/blog/': require('./blog').blogSidebar,
    '/sharing/': require('./sharing').sharingSidebar,
    '/interview/':  require('./interview').interview
})
