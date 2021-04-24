export default (context) => {
	const { router } = context
	if(typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
		router.onReady(() => {
			const { app } = router;
			app.$once("hook:mounted", () => {
				setTimeout(() => {
					const { hash } = document.location;
            if (hash.length > 1) {
            const id = decodeURIComponent(hash.substring(1))
            const element = document.getElementById(id)
            if (element) element.scrollIntoView()
          }
				}, 200)
				document.body.addEventListener('click', (e) => {
					if (e.target) {
						const node = e.target
						if (!node.href) return
						let url
						try {
							url = new URL(node.href)
						} catch{
							return
						}
						if (node.nodeName === 'A' && url.hash) {
							const local = new URL(location.href)
							if (local.pathname === url.pathname) {
								const id = solveHansh(decodeURIComponent(url.hash.substring(1)))
								const element = document.getElementById(id)
								if (element) {
									element.scrollIntoView({behavior: "smooth"})
									e.stopPropagation()
									e.preventDefault()
									setTimeout(() => {
										context.router.app.$router.push({
											hash: '#' + id
										})
									}, 500)
								}
							}
						}
					}
				}, true)
			})
		})
		// router.beforeEach((to, from, next) => {
		// 	if (to.name !== from.name && window.layoutPage) {
		// 		window.layoutPage.vssueKey++
		// 	}
		// 	next()
		// })
	}
}

// 基于当前发现的规则进行处理，没有查看md编译代码确认规则
// &nbsp; 11sd111 1?ds!@@$)* => _11sd111-1-ds
//   __11__---1-23___3s---dsa---3-sd##__ => _11-1-23-3s-dsa-3-sd
// ---dsd2 => dsd2
// __dsd--asd--dsd2 ==> dsd-asd-dsd2
// fix: vuepress编译时，id的大写字母变小写，重复的添加order, 空格转换等
function solveHansh (hash = '') {
	// [u4e00-u9fa5]
	hash = hash.replace(/([^\u4e00-\u9fa50-9a-zA-Z-]+)/g, '-').replace(/[-]+/g, '-').replace(/(^-*)|(-*$)/g, '').replace(/^([0-9])/, '_$1')
	return hash.toLocaleLowerCase()
}