const newsinfoDB = require('./public/news/newsinfo.json');
const commentsDB = require('./public/news/comment.json');
const fs = require('fs');
const path = require('path');

exports.getnewsInfo = id => {
  let newsList = newsinfoDB.news;
  let news;
  newsList.forEach(element => {
    if(element.id == parseInt(id)) {
      news = element;
    }
  });
  return news;
};

exports.getcomments = (id,pageindex) => {
  let comments=[];
  id = parseInt(id);
  pageindex = (parseInt(pageindex) -1 ) * 10;
  commentsDB.news_comments.forEach(element => {
    if(element.id == id) {
      comments = element.comments.slice(pageindex, pageindex+10)
    }
  });
  return comments
};

exports.addcomments = (obj) => {
  if(!obj.comments.user_name) {
    obj.comments["user_name"] = "匿名用户";
  }
  let newsList = commentsDB.news_comments;
  newsList.forEach(element => {
    if(element.id == parseInt(obj.id)) {
      element.comments.push(obj.comments);
    }
  });
  fs.writeFileSync(path.join(__dirname,'/public/news/comment.json'),JSON.stringify(commentsDB), {encoding:'utf8'});
};
