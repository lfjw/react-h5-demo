const express = require('express');
const app = express()

const cors = require('cors')
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
    list = lessons.filter(item => item.category === category)
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


app.listen(3333)