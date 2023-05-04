const express = require("express");
const getMenu = require("./syrve-api");

const app = express();
const PORT = process.env.PORT || 8081;
console.log(getMenu)
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
  );
  next();
});

//restatrt

app.use(async function (request, response) {
  response.send(await getMenu);
});

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});
