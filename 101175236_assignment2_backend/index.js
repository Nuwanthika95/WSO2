const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 9090;

app.use(cors());
app.use(express.json());

const uri = process.env.URI;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database ");
  })
  .catch((err) => {
    console.log("Could not connect to the database.", err);
    process.exit();
  });

const employeeRouter = require("./routes/Router");

app.use("/", employeeRouter);

app.listen(port, () => {
  console.log(`Server port: ${port}`);
});
