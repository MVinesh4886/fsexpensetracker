const express = require("express");
const sequelize = require("./utils/database");

const router = require("./routes/router");
//-------------------------------------

const app = express();

app.use(express.json());
app.use(express.static("public"));

app.use("/expense", router);
//------------------------------------------

sequelize
  .sync()
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT || 2002;
app.listen(PORT, function () {
  console.log(`Server is running on Port ${PORT}`);
});
