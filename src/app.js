const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
app.use(cors());
app.use(express.json());
const { sequelize } = require('./domain');

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터 베이스 연결 성공.');
  })
  .catch((error) => {
    console.log(error);
  })

// app.use("/", (req, res) => {
//   res.status(200).send("Hello world!");
// })

const route = require('./routes/index');
app.use('/', route);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}...`);
});