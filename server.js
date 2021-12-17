import express from "express";
import { connectDB } from "./config/dbConnection.js";
// import routes
import authRoute from "./routes/userRoute.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import { PORT } from "./config/environmentVariables.js";

// INITIALIZING EXPRESS APP HERE
const app = express();

// DATABASE CONNECTION
connectDB();

// MIDDLEWARE
app.use(bodyParser.json());
app.use(morgan("dev"));

// API ROUTES
app.get("/", (req, res) => {
  res.status(200).send("Welcome to ems-backend!");
});

// USER API ROUTES
app.use("/api/user", authRoute);

// ERROR HANDLING
app.use(notFound);
app.use(errorHandler);

// DEFINING PORT
const port = PORT;

// LISTENING TO PORT
app.listen(port, () => {
  console.log(`server is up and running on port: ${port}.`);
});
