const express = require('express');
const app = express()
const sliders = require('./mock/sliders');
const cors = require('cors')
app.use(cors())
app.get('/getSliders', function(req, res){
    res.json(sliders)
})


app.listen(3333)