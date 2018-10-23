const newsinfoDB = require("./public/news/newsinfo.json");
const commentsDB = require("./public/news/comment.json");
const photoDB = require("./public/photo/photolist.json");
const photoinfoDB = require("./public/photo/photoinfo.json");
const photocommentDB = require("./public/photo/photocomment.json");
const photosDB = require("./public/photo/photos.json");
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
  }
  if (a[0] == "photocomment") {
    photocommentDB.photo_comments.forEach(element => {
      if (element.id == parseInt(a[1])) {
        element.comments.push(obj.comments);
      }
    });
    _save("/public/photo/photocomment.json", photocommentDB);
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

function _save(pathStr, db) {
  fs.writeFileSync(path.join(__dirname, pathStr), JSON.stringify(db), {
    encoding: "utf8"
  });
}
