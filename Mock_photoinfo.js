const Mock = require('mockjs');
const path = require('path');
const fs = require('fs');

let data = Mock.mock({
  "news|70":[
    {
      "photo_id|+1":1000,
      "title":"@csentence(8,12)",
      "add_time":"@date(yyyy-MM-dd)T@date(HH:mm:ss).000Z",      
      "click":"@natural(0,100)",
      "content":"@cparagraph(3,7)",
    }
  ]
})

fs.writeFileSync(path.join(__dirname,'/public/photo/photoinfo.json'),JSON.stringify(data),{encoding:'utf8'});