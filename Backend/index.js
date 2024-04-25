const express = require("express");
const { connectDB } = require("./data/database");
const routes = require("./routes/bid.js");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Nice cooking  with you");
});

connectDB();

const port = 3001;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

app.use("/api/v1", routes);
