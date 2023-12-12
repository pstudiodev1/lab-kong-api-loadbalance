const express = require("express");
const app = express();

app.get("/api/users", (req, res) => {
  console.log("/api/users");
  res.send({
    items: [
      {
        id: 1,
        name: "Nobita"
      },
      {
        id: 2,
        name: "Doramon"
      },
      {
        id: 3,
        name: "Giant"
      },
      {
        id: 4,
        name: "Sunao"
      },
      {
        id: 5,
        name: "Shisuka"
      }
    ]
  });
});

let port = process.env.PORT;
if (port == undefined) {
  port = 30000;
}
app.listen(port, () => {
  console.log("Start orders users on port " + port);
});
