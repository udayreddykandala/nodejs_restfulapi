const express = require("express");
const app = express();

const dotenv = require("dotenv");
//Setting up config.env file variables
dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `server is running on the port ${PORT} in ${process.env.NODE_ENV} mode.`
  );
});
