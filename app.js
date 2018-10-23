// 入口文件

// 导入express
const express = require("express");
// 创建express对象
const app = express();

// 导入cors
const cors = require("cors");
// 导入body-parser
const bodyParser = require("body-parser");

// 加载静态资源
app.use(express.static("public"));
// 加载cors
app.use(cors());
// 加载body-parser
app.use(bodyParser({ extended: true }));

// 导入数据文件
const newsList = require("./public/news/db.json");
const phototitlelistDB = require("./public/photo/phototitlelist.json");
const goodslistDB = require('./public/goods/goodslist.json');

// 导入数据处理模块
const service = require("./service.js");

app.get("/getswipe", (req, res) => {
  res.jsonp({
    status: 0,
    msg: [
      {
        img:
          "http://127.0.0.1:58888/img/8e7fca8065380cd7854c800ea044ad3458828187.jpg"
      },
      {
        img:
          "http://127.0.0.1:58888/img/9eed08fa513d26973493baa654fbb2fb4216d88e.jpg"
      },
      {
        img:
          "http://127.0.0.1:58888/img/9f45ad345982b2b7cacd1b2730adcbef77099b87.jpg"
      }
    ]
  });
});

app.get("/getNewsList", (req, res) => {
  res.json({
    status: 0,
    newsList: newsList.news
  });
});

app.get("/getnewsinfo/:id", (req, res) => {
  res.json({
    status: 0,
    news: service.getnewsInfo(req.params.id)
  });
});

app.get("/getcomments/:commentcategory/:id", (req, res) => {
  if (req.params.commentcategory == "newscomment") {
    let comments = service.getcomments(
      req.params.id,
      req.query.pageindex,
      "news"
    );
    res.json({
      status: 0,
      comments
    });
  } else if (req.params.commentcategory == "photocomment") {
    let comments = service.getcomments(
      req.params.id,
      req.query.pageindex,
      "photo"
    );
    res.json({
      status: 0,
      comments
    });
  }
});

app.post("/addcomment", (req, res) => {
  service.addcomments(req.body);
  res.send({
    status: 0
  });
});

app.get("/getphototitlelist", (req, res) => {
  res.json({
    status: 0,
    message: phototitlelistDB.photolist
  });
});

app.get("/getphotolist/:id", (req, res) => {
  res.json({
    status: 0,
    photos: service.getphoto(req.params.id).photos
  });
});

app.get("/getphotoinfo/:photo_id", (req, res) => {
  res.json({
    status: 0,
    message: service.getphotoinfo(req.params.photo_id)
  });
});

app.get("/getphotos/:photo_id", (req, res) => {
  res.json({
    status: 0,
    message: service.getphotos(req.params.photo_id)
  });
});

app.get("/getgoodslist", (req, res) => {
  res.json({
    status:0,
    message:goodslistDB.goods,
  })
});

app.listen(58888, "127.0.0.1", () => {
  console.log("正在监听http://127.0.0.1:58888");
});
