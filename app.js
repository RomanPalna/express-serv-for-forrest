const express = require("express");
const getMenu = require("./syrve-api");

const app = express();

app.use(async function (request, response) {
  response.send(await getMenu);
});

app.listen(3000, () => {
  console.log("App listen on port 3000");
});
