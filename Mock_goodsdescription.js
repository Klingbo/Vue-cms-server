const Mock = require('mockjs');
const path = require('path');
const fs = require('fs');

let data = Mock.mock({
  "goods|20":[
    {
      "id|+1":500,
      "title":"@cword(8,12)",
      "content":"@cparagraph(8,15)",
    }
  ]
})

fs.writeFileSync(path.join(__dirname,'/public/goods/goodsdescription.json'),JSON.stringify(data),{encoding:'utf8'});