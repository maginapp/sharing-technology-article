---
meta:
  - name: keywords
    content: node,koa2,koa-router
  - name: description
    content: 基于nodejs/koa搭建web服务器 -- koa-mysql使用说明
---

# koa-mysql

[mysql模块](https://www.npmjs.com/package/mysql)的操作都是异步操作

## [mysql](https://www.npmjs.com/package/mysql)基础使用

### 封装mysql调用方法

* 创建async-db.js

```js
// async-db.js
const mysql = require('mysql')

// 创建数据池
const pool = mysql.createPool({
  host     :  '127.0.0.1',
  user     :  'root',
  password :  '123456',
  database :  'my_database'
})

let query = function( sql, values ) {
  return new Promise(( resolve, reject ) => {
    // 在数据池中进行会话操作
    pool.getConnection(function(err, connection) {
      if (err) {
        reject( err )
      } else {
        connection.query(sql, values, ( err, rows) => {
          if ( err ) {
            reject( err )
          } else {
            resolve( rows )
          }
          // 结束会话 释放链接
          connection.release()
        })
      }
    })
  })
}

module.exports = { query }
```

* 使用async-db.js

```js
const { query } = require('./async-db')
async function selectAllData( ) {
  let sql = 'SELECT * FROM my_table'
  let dataList = await query( sql )
  return dataList
}

async function getData() {
  let dataList = await selectAllData()
  console.log( dataList )
}

getData()
```


### session处理

```js
const Koa = require('koa')
const session = require('koa-session-minimal')
const MysqlSession = require('koa-mysql-session')

const app = new Koa()

// 配置存储session信息的mysql
let store = new MysqlSession({
  user: 'root',
  password: 'abc123',
  database: 'koa_demo',
  host: '127.0.0.1',
})

// 存放sessionId的cookie配置
let cookie = {
  maxAge: '', // cookie有效时长
  expires: '',  // cookie失效时间
  path: '', // 写cookie所在的路径
  domain: '', // 写cookie所在的域名
  httpOnly: '', // 是否只用于http请求中获取
  overwrite: '',  // 是否允许重写
  secure: '',
  sameSite: '',
  signed: '',

}

// 使用session中间件
app.use(session({
  key: 'SESSION_ID',
  store: store,
  cookie: cookie
}))

app.use( async ( ctx ) => {

  // 设置session
  if ( ctx.url === '/set' ) {
    ctx.session = {
      user_id: Math.random().toString(36).substr(2),
      count: 0
    }
    ctx.body = ctx.session
  } else if ( ctx.url === '/' ) {

    // 读取session信息
    ctx.session.count = ctx.session.count + 1
    ctx.body = ctx.session
  } 

})

app.listen(3000)
console.log('[demo] session is starting at port 3000')
```

## [sequelize](https://sequelize.org/)

* sequelize初始化

```js
// 
const config = {
  database: 'my_database', // 使用哪个数据库
  username: 'root', // 用户名
  password: '123456', // 口令
  host: '127.0.0.1', // 主机名
  port: 3306 // 端口号，MySQL默认3306
}

// 
const Sequelize = require('sequelize')

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})
```

* 创建Model

```js
// 
const Pet = sequelize.define('pet', {
    id: {
        type: Sequelize.STRING(50),
        primaryKey: true
    },
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.BIGINT,
    updatedAt: Sequelize.BIGINT,
    version: Sequelize.BIGINT
}, {
        timestamps: false
    })
```    

* 创建新数据

```js
// 
(async () => {
    const dog = await Pet.create({
        id: 'd-' + now,
        name: 'Odie',
        gender: false,
        birth: '2008-08-08',
        createdAt: now,
        updatedAt: now,
        version: 0
    });
    console.log('created: ' + JSON.stringify(dog));
})();
```    

* 数据查询

```js
(async () => {
    const pets = await Pet.findAll({
        where: {
            name: 'Gaffey'
        }
    });
    console.log(`find ${pets.length} pets:`);
    for (let p of pets) {
        console.log(JSON.stringify(p));
    }
})();
```    


* 其他

```js
(async () => {
    const p = await queryFromSomewhere();
    p.gender = true;
    p.updatedAt = Date.now();
    p.version ++;
    await p.save();
    await p.destroy();
})();
```

执行的sql语句

```sql
Executing (default): INSERT INTO `pets` (`id`,`name`,`gender`,`birth`,`createdAt`,`updatedAt`,`version`) VALUES ('g-1471961204219','Gaffey',false,'2007-07-07',1471961204219,1471961204219,0);
```

## 文献参考

[mysql](https://www.npmjs.com/package/mysql)

[sequelize](https://sequelize.org/)

[mysql模块](https://chenshenhai.github.io/koa2-note/note/mysql/info.html)

[mysql](https://www.liaoxuefeng.com/wiki/1022910821149312/1101571555324224)