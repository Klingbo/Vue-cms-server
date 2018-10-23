const Mock = require("mockjs");
const path = require("path");
const fs = require("fs");

let data = Mock.mock({
  "photos|70": [
    {
      "photo_id|+1": 1000,
      photo_url: [
        {
          src: "http://127.0.0.1:58888/photo/photos/1.jpg",
          msrc: "http://127.0.0.1:58888/photo/photos/tb1.jpg"
        },
        {
          src: "http://127.0.0.1:58888/photo/photos/2.jpg",
          msrc: "http://127.0.0.1:58888/photo/photos/tb2.jpg"
        },
        {
          src: "http://127.0.0.1:58888/photo/photos/3.jpg",
          msrc: "http://127.0.0.1:58888/photo/photos/tb3.jpg"
        },
        {
          src: "http://127.0.0.1:58888/photo/photos/4.jpg",
          msrc: "http://127.0.0.1:58888/photo/photos/tb4.jpg"
        },
        {
          src: "http://127.0.0.1:58888/photo/photos/5.jpg",
          msrc: "http://127.0.0.1:58888/photo/photos/tb5.jpg"
        },
        {
          src: "http://127.0.0.1:58888/photo/photos/6.jpg",
          msrc: "http://127.0.0.1:58888/photo/photos/tb6.jpg"
        },
        {
          src: "http://127.0.0.1:58888/photo/photos/7.jpg",
          msrc: "http://127.0.0.1:58888/photo/photos/tb7.jpg"
        },
        {
          src: "http://127.0.0.1:58888/photo/photos/8.jpg",
          msrc: "http://127.0.0.1:58888/photo/photos/tb8.jpg"
        }
      ]
    }
  ]
});

fs.writeFileSync(
  path.join(__dirname, "/public/photo/photos.json"),
  JSON.stringify(data),
  { encoding: "utf8" }
);
