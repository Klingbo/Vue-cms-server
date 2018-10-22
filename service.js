const newsinfoDB = require('./public/news/newsinfo.json');
const commentsDB = require('./public/news/comment.json')

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
}
