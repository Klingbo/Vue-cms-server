// 入口文件
const express = require('express')
const app = express();

app.use(express.static('public'))



app.get('/getswipe', (req, res) => {
  console.log(req.query);
  res.jsonp({
    status:0,
    msg:[
      {img: 'http://127.0.0.1:58888/img/8e7fca8065380cd7854c800ea044ad3458828187.jpg'},
      {img: 'http://127.0.0.1:58888/img/9eed08fa513d26973493baa654fbb2fb4216d88e.jpg'},
      {img: 'http://127.0.0.1:58888/img/9f45ad345982b2b7cacd1b2730adcbef77099b87.jpg'},
    ]
  })
});

app.listen(58888, '127.0.0.1', () => {
  console.log('正在监听http://127.0.0.1:58888')
});