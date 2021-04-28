const express = require("express");

const server = express();

server.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
