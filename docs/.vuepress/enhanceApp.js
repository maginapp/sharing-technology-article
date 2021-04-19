export default ({ router }) => {
	if(typeof process === 'undefined' || process.env.VUE_ENV !== 'server') {
		router.onReady(() => {
			const { app } = router;
			app.$once("hook:mounted", () => {
        console.log('hook:mounted')
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
						if (node.href) return
						let url
						try {
							url = new URL(node.href)
						} catch{
							return
						}
						if (node.nodeName === 'A' && url.hash) {
							const local = new URL(location.href)
							if (local.pathname === url.pathname) {
								const id = decodeURIComponent(url.hash.substring(1))
								const element = document.getElementById(id)
								if (element) {
									element.scrollIntoView({behavior: "smooth"})
									e.stopPropagation()
									e.preventDefault()
								}
							}
						}
					}
				}, true)
			})
		})
	}
}