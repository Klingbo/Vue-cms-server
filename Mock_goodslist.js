const Mock = require('mockjs');
const path = require('path');
const fs = require('fs');

let data = Mock.mock({
  "goods|20":[
    {
      "id|+1":500,
      "title":"@csentence(8,12)",
      "add_time":"@date(yyyy-MM-dd)T@date(HH:mm:ss).000Z",
      "zhaiyao":"@csentence(8,12)",
      "click":"@natural(0,100)",
      "sell_price":"@natural(2000,2500)",
      "market_price":"@natural(1800,2000)",
      "img_url":"http://127.0.0.1:58888/photo/G1.JPEG",
      "stock_quantity":"@natural(50,100)"
    }
  ]
})

fs.writeFileSync(path.join(__dirname,'/public/goods/goodslist.json'),JSON.stringify(data),{encoding:'utf8'});