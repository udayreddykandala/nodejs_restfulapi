const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
//Setting up config.env file variables

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});
