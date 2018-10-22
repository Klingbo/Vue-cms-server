const Mock = require('mockjs');
const path = require('path');
const fs = require('fs');

let data = Mock.mock({
  "news|10":[
    {
      "id|+1":2018,
      "title":"@csentence(8,12)",
      "add_time":"@date(yyyy-MM-dd)T@date(HH:mm:ss).000Z",      
      "click":"@natural(0,100)",
      "content":"@cparagraph(8,15)",
    }
  ]
})

fs.writeFileSync(path.join(__dirname,'/public/news/newsinfo.json'),JSON.stringify(data),{encoding:'utf8'});