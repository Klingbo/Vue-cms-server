const Mock = require('mockjs');
const path = require('path');
const fs = require('fs');

let data = Mock.mock({
  "photo_comments|70":[
    {
      "id|+1":1000,
      "comments|20":[
        {
          "user_name":"@cword(3,6)",
          "add_time":"@date(yyyy-MM-dd)T@date(HH:mm:ss).000Z",
          "content":"@csentence()",
        }
      ],
    }
  ]
})

fs.writeFileSync(path.join(__dirname,'/public/photo/photocomment.json'),JSON.stringify(data),{encoding:'utf8'});