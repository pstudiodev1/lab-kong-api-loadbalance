const express = require("express");
const app = express();

app.get("/api/masters/health", (req, res) => {
  console.log("/api/masters/health");
  res.send({
    version: "1.0.0"
  });
});

app.get("/api/masters/products", (req, res) => {
  console.log("/api/masters/products");
  res.send({
    items: [
      {
        id: 1,
        name: "Items A"
      },
      {
        id: 2,
        name: "Items B"
      },
      {
        id: 3,
        name: "Items C"
      },
      {
        id: 4,
        name: "Items D"
      },
      {
        id: 5,
        name: "Items E"
      },
      {
        id: 6,
        name: "Items F"
      }
    ]
  });
});

let port = process.env.PORT;
if (port == undefined) {
  port = 10000;
}
app.listen(port, () => {
  console.log("Start masters users on port " + port);
});
