const express = require("express");
const app = express();
const fs = require("fs");
const port = 3000;
app.use(express.static(__dirname + "/public"));
app.get("/", (req, res) => {
  setTimeout(()=>{
    res.send("Hello World!")
  },2000)
});
app.get("/userInfo", (req, res) => {
  setTimeout(()=>{
    res.send({
      succ:'ok',
      msg:"Hello World!"
    })
  },2000)
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
