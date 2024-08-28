const express = require("express");

const app = express();
app.use(express.json());

app.get("/", function (req, res) {
  res.json({ msg: "h" });
});

app.listen(3000, () => {
  console.log(`App listening on port ${3000}`);
});
