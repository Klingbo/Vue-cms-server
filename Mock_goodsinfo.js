const Mock = require('mockjs');
const path = require('path');
const fs = require('fs');

let data = Mock.mock({
  "goods|20":[
    {
      "id|+1":500,
      "title":"@cword(8,12)",
      "add_time":"@date(yyyy-MM-dd)T@date(HH:mm:ss).000Z",
      "sell_price":"@natural(2000,2500)",
      "market_price":"@natural(1800,2000)",
      "stock_quantity":"@natural(50,100)",
      "goods_no":"@natural(123456789,9087654321)"
    }
  ]
})

fs.writeFileSync(path.join(__dirname,'/public/goods/goodsinfo.json'),JSON.stringify(data),{encoding:'utf8'});