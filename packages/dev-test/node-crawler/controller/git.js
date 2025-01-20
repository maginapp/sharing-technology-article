const request = require('request')
const cheerio = require('cheerio')

const getContent = async function (url, label, ctx)  {
  return new Promise((resolve, reject) => {
    const opt = getOptions(url + label, ctx)
    console.log(url + label, opt)
    request(opt, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        // console.log(body) // 打印google首页
        const $ = cheerio.load(body)
        const text = $('#js-issues-toolbar .table-list-header-toggle').eq(0).text()
        // console.log(text)
        const textArr = text.trim().split(/\s+/)
        const count = {
          'Open': textArr[0] || 0,
          'Closed': textArr[2] || 0
        }
        // console.log(count)
        const list = []
        const issues = $('[id^=issue][id$=link]')
        console.log(label, issues.length)
        issues.each((index, item) => {
          // console.log(index, item)
          // 获取前10条
          if (index < 10) {
            list.push({
              title: $(item).text(),
              link: $(item).attr('href')
            })
          }
        })
        // js-issues-toolbar
        resolve({ ...count, list, label })
      } else {
        console.log(error, url + label)
        reject(error)
      }
    })
  })
}  


const userAgents = [
  "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.12) Gecko/20070731 Ubuntu/dapper-security Firefox/1.5.0.12",
  "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Acoo Browser; SLCC1; .NET CLR 2.0.50727; Media Center PC 5.0; .NET CLR 3.0.04506)",
  "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.56 Safari/535.11",
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_3) AppleWebKit/535.20 (KHTML, like Gecko) Chrome/19.0.1036.7 Safari/535.20",
  "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
  "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.1 (KHTML, like Gecko) Chrome/21.0.1180.71 Safari/537.1 LBBROWSER",
  "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Win64; x64; Trident/5.0; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET CLR 2.0.50727; Media Center PC 6.0) ,Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9",
  "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322; .NET CLR 2.0.50727)",
  "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)",
  "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; QQDownload 732; .NET4.0C; .NET4.0E)",
  "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:2.0b13pre) Gecko/20110307 Firefox/4.0b13pre",
  "Opera/9.80 (Macintosh; Intel Mac OS X 10.6.8; U; fr) Presto/2.9.168 Version/11.52",
  "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.8.0.12) Gecko/20070731 Ubuntu/dapper-security Firefox/1.5.0.12",
  "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; LBBROWSER)",
  "Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.8) Gecko Fedora/1.9.0.8-1.fc10 Kazehakase/0.5.6",
  "Mozilla/5.0 (X11; U; Linux; en-US) AppleWebKit/527+ (KHTML, like Gecko, Safari/419.3) Arora/0.6",
  "Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C; .NET4.0E; QQBrowser/7.0.3698.400)",
  "Opera/9.25 (Windows NT 5.1; U; en), Lynx/2.8.5rel.1 libwww-FM/2.14 SSL-MM/1.4.1 GNUTLS/1.2.9",
  "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36"
];


//构造请求头-浏览器
function randomHead() {
  return userAgents[
      Math.floor(Math.random() * (0 - userAgents.length) + userAgents.length)
  ];
}

//构造请求头-ip
function returnIp() {
  return (
      Math.floor(Math.random() * (10 - 255) + 255) +
      "." +
      Math.floor(Math.random() * (10 - 255) + 255) +
      "." +
      Math.floor(Math.random() * (10 - 255) + 255) +
      "." +
      Math.floor(Math.random() * (10 - 255) + 255)
  );
}

const getOptions = (url, ctx) => {
  var opt = {
    method: 'GET',//这里是发送的方法
    uri: url,     //这里是访问的路径
    // uri: url + '&time=' + +new Date(),     //这里是访问的路径
    headers:{
     //这里放期望发送出去的请求头
     "User-Agent": randomHead(),
     // "X-Forwarded-For": returnIp(),
    },
    timeout: 1000 * 60,
    pool: {
      maxSockets: Infinity
    }
  }
  if (ctx) {
    opt.headers = ctx.request.header || ctx.request.headers
    opt.headers.host = 'github.com'
    delete opt.headers.cookie
  }
  return opt
}

const apiRequest = (ctx) => {
  // https://api.github.com/repos/maginapp/sharing-technology-article/issues
  // http
}

module.exports = { getContent }