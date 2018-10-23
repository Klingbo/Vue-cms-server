const Mock = require('mockjs');
const path = require('path');
const fs = require('fs');

let data = Mock.mock({
  "photo_category|7":[
    {
      "category_id|+1":0,
      "photos|10":[
        {
          "photo_id|+1":1000,
          "title":"@csentence()",
          "zhaiyao":"@cparagraph()",
          "img_url":"http://127.0.0.1:58888/photo/G25.jpg"
        }
      ],
    }
  ]
})

fs.writeFileSync(path.join(__dirname,'/public/photo/photolist.json'),JSON.stringify(data),{encoding:'utf8'});