require("dotenv").config({path: "./config.env"})
const express = require("express");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");
const errorHanlder = require("./middleware/error");

//connect db
connectDB();

const app = express();
app.use(express.json());
app.use("/api/auth", require("./routes/auth"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => console.log(`serving on port ${PORT}`))

// process.on("unhandledRejection", (err, promise) => {

//     console.log(`logged error ${err}`);
//     server.close(() => process.exit(1));
// })