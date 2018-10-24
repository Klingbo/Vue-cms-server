const Mock = require("mockjs");
const path = require("path");
const fs = require("fs");

let data = Mock.mock({
  "goods|20": [
    {
      "id|+1": 500,
      img: [
        { img_url: "http://127.0.0.1:58888/photo/G1.JPEG" },
        { img_url: "http://127.0.0.1:58888/photo/G25.jpg" }
      ]
    }
  ]
});

fs.writeFileSync(
  path.join(__dirname, "/public/goods/goodsinfopic.json"),
  JSON.stringify(data),
  { encoding: "utf8" }
);
