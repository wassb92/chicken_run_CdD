require("dotenv").config({ path: "./config.env" });
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const app = express();
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/output.json");
const bodyParser = require("body-parser");

connectDB();
app.use(cors({ origin: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/", require("./routes/chicken"));

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
