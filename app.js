const express = require("express");
const getMenu = require("./syrve-api");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(async function (request, response) {
  response.send(await getMenu);
});

app.listen(PORT, () => {
  console.log(`App listen on port ${PORT}`);
});
