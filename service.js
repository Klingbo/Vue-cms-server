const newsinfoDB = require("./public/news/newsinfo.json");
const commentsDB = require("./public/news/comment.json");
const photoDB = require("./public/photo/photolist.json");
const photoinfoDB = require("./public/photo/photoinfo.json");
const photocommentDB = require("./public/photo/photocomment.json");
const photosDB = require("./public/photo/photos.json");
const goodslistDB = require("./public/goods/goodslist.json");
const goodsinfopicDB = require("./public/goods/goodsinfopic.json");
const goodsinfoDB = require("./public/goods/goodsinfo.json");
const goodsdescriptionDB = require("./public/goods/goodsdescription.json");
const goodscommentDB = require("./public/goods/goodscomment.json");
const fs = require("fs");
const path = require("path");

exports.getnewsInfo = id => {
  let newsList = newsinfoDB.news;
  let news;
  newsList.forEach(element => {
    if (element.id == parseInt(id)) {
      news = element;
    }
  });
  return news;
};

exports.getcomments = (id, pageindex, db) => {
  let comments = [];
  id = parseInt(id);
  pageindex = (parseInt(pageindex) - 1) * 10;
  if (db == "news") {
    commentsDB.news_comments.forEach(element => {
      if (element.id == id) {
        comments = element.comments.slice(pageindex, pageindex + 10);
      }
    });
  } else if (db == "photo") {
    photocommentDB.photo_comments.forEach(element => {
      if (element.id == id) {
        comments = element.comments.slice(pageindex, pageindex + 10);
      }
    });
  } else if (db == "goods") {
    goodscommentDB.goods_comments.forEach(element => {
      if (element.id == id) {
        comments = element.comments.slice(pageindex, pageindex + 10);
      }
    });
  }
  return comments;
};

exports.addcomments = obj => {
  if (!obj.comments.user_name) {
    obj.comments["user_name"] = "匿名用户";
  }
  let a = obj.id.split("/");
  obj.id = parseInt(a[1]);
  if (a[0] == "newscomment") {
    commentsDB.news_comments.forEach(element => {
      if (element.id == parseInt(a[1])) {
        element.comments.push(obj.comments);
      }
    });
    _save("/public/news/comment.json", commentsDB);
  } else if (a[0] == "photocomment") {
    photocommentDB.photo_comments.forEach(element => {
      if (element.id == parseInt(a[1])) {
        element.comments.push(obj.comments);
      }
    });
    _save("/public/photo/photocomment.json", photocommentDB);
  }else if (a[0] == "goodscomment") {
    goodscommentDB.goods_comments.forEach(element => {
      if (element.id == parseInt(a[1])) {
        element.comments.push(obj.comments);
      }
    });
    _save("/public/goods/goodscomment.json", goodscommentDB);
  }
};

exports.getphoto = id => {
  id = parseInt(id);
  return photoDB.photo_category[id];
};

exports.getphotoinfo = photo_id => {
  photo_id = parseInt(photo_id);
  let temp = {};
  photoinfoDB.news.forEach(value => {
    if (value.photo_id == photo_id) {
      temp = value;
    }
  });
  return temp;
};

exports.getphotos = photo_id => {
  photo_id = parseInt(photo_id);
  let temp = [];
  photosDB.photos.forEach(value => {
    if (value.photo_id == photo_id) {
      temp = value.photo_url;
    }
  });
  return temp;
};

exports.getgoodslist = pageindex => {
  let goods = [];
  pageindex = (parseInt(pageindex) - 1) * 10;
  goods = goodslistDB.goods.slice(pageindex, pageindex + 10);
  return goods;
};

exports.getlunbo = goods_id => {
  goods_id = parseInt(goods_id);
  let temp = [];
  goodsinfopicDB.goods.forEach(value => {
    if (value.id == goods_id) {
      temp = value.img;
    }
  });
  return temp;
};

exports.getgoodsinfo = goods_id => {
  let temp = {};
  goods_id = parseInt(goods_id);
  goodsinfoDB.goods.forEach(value => {
    if (value.id == goods_id) {
      temp = value;
    }
  });
  return temp;
};

exports.getgoodsdescription = goods_id => {
  let temp = {};
  goods_id = parseInt(goods_id);
  goodsdescriptionDB.goods.forEach(value => {
    if (value.id == goods_id) {
      temp = value;
    }
  });
  return temp;
};

function _save(pathStr, db) {
  fs.writeFileSync(path.join(__dirname, pathStr), JSON.stringify(db), {
    encoding: "utf8"
  });
}
