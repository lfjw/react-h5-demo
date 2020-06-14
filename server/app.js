let express = require('express');
let app = express()
let bodyParser = require('body-parser')
let session = require('express-session')

let cors = require('cors')

app.use(bodyParser.json())
app.use(session({
  resave: true,
  secret: 'jw',
  saveUninitialized: true,
}))



app.use(cors())

const sliders = require('./mock/sliders');
app.get('/getSliders', function (req, res) {
  res.json(sliders)
})

let lessons = require('./mock/lessons');
app.get('/getLessons/:category', function (req, res) {
  // http://dadas/vue?offset=0&limit=5
  let category = req.params.category;
  let { offset, limit } = req.query;
  offset = isNaN(offset) ? 0 : parseInt(offset) // 偏移量
  limit = isNaN(limit) ? 5 : parseInt(limit)// 每页条数

  let list = JSON.parse(JSON.stringify(lessons));

  if (category !== 'all') {
    list = list.filter(item => item.category === category)
  }

  let total = list.length
  // 分页数据
  list = list.slice(offset, offset + limit)
  // 方便查看下拉加载
  list.forEach(item => item.title = item.title + Math.random())

  setTimeout(() => {
    res.json({
      list,
      hasMore: total > offset + limit
    })
  }, 1000)

})


let users = []
app.post('/reg', function (req, res) {
  let user = req.body
  users.push(user);
  console.log(users,'----已经注册的数据---');
  
  res.json({
    success: '注册成功！'
  })
})

app.post('/login', function (req, res) {
  let body = req.body // {username, password}
  let user = users.find(item => item.username === body.username && item.password === body.password)
  if (user) {
    req.session.user = user
    res.json({
      user,
      success: '登录成功'
    })
  } else {
    res.json({
      user,
      success: '登录失败'
    })
  }
})

app.listen(3333)