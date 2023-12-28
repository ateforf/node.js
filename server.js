const express = require("express");




const app = express();

app.get("/hello", (req, res) => {
  res.send("hello");

})

app.listen(4000, () => {
  console.log("I AM LISTENING IN PORT 3000");
});