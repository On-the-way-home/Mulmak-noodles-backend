const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();


app.use(cors());
app.use(express.json());

app.use("/", (req, res) => {
  res.status(200).send("Hello world!");
})

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}...`);
});