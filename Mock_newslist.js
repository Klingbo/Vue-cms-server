const Mock = require('mockjs');
const path = require('path');
const fs = require('fs');

let data = Mock.mock({
  "news|10":[
    {
      "id|+1":2018,
      "title":"@csentence(8,12)",
      "add_time":"@date(yyyy-MM-dd)T@date(HH:mm:ss).000Z",
      "zhaiyao":"@csentence(8,12)",
      "click":"@natural(0,100)",
      "img_url":"http://127.0.0.1:58888/news/newsImg/j_0006.gif"
    }
  ]
})

fs.writeFileSync(path.join(__dirname,'/public/news/db.json'),JSON.stringify(data),{encoding:'utf8'});