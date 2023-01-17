const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger/output.json";
const endpointsFiles = ["./routes/chicken.js"];

swaggerAutogen(outputFile, endpointsFiles);
