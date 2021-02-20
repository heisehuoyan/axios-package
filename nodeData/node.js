const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); //表单请求
app.use(cors()); //解决跨域问题
app.listen(7001, () => {
  console.log("服务器启动了");
});
app.get("/slies", (req, res) => {
  res.json("helloworld");
});
