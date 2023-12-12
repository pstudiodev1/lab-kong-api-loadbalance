const express = require("express");
const app = express();

app.get("/api/orders", (req, res) => {
  console.log("/api/orders");
  res.send({
    items: [
      {
        id: 1,
        product_id: 1,
        user_id: 1,
        qty: 10
      },
      {
        id: 2,
        product_id: 2,
        user_id: 1,
        qty: 1
      },
      {
        id: 3,
        product_id: 3,
        user_id: 1,
        qty: 5
      },
      {
        id: 4,
        product_id: 4,
        user_id: 3,
        qty: 20
      }
    ]
  });
});

let port = process.env.PORT;
if (port == undefined) {
  port = 20000;
}
app.listen(port, () => {
  console.log("Start orders users on port " + port);
});
