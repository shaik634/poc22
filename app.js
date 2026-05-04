const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("POC 22 Deployment using GitHub Actions ✅");
});

app.listen(3000, () => {
  console.log("App running on port 3000");
});
