import express from "express";
import { connectDB } from "./config/dbConnection.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import cors from 'cors';
import { PORT } from "./config/environmentVariables.js";

<<<<<<< HEAD
// INITIALIZING EXPRESS APP HERE
const app = express();

// DATABASE CONNECTION
connectDB();
=======
connectDB();

// initializing our Express application here.
const app = express();
app.use(cors());
app.use('/uploads',express.static('uploads'));
// database connection

>>>>>>> b171a6b891f302fb991ba94bfc64757919e40ca8

// MIDDLEWARE
app.use(bodyParser.json());
app.use(morgan("dev"));

<<<<<<< HEAD
// API ROUTES
app.get("/", (req, res) => {
  res.status(200).send("Welcome to ems-backend!");
});

// USER API ROUTES
app.use("/api/user", authRoute);

// ERROR HANDLING
=======
//import router
import userRoute from "./routes/userRoute.js";
import documentRoute from "./routes/documentRoute.js";
import leaveRoute from "./routes/leaveRoute.js";
import holidayRoute from "./routes/holidayRoute.js";
// api calls
app.use("/api/user/", userRoute);
app.use("/api/document/", documentRoute);
app.use("/api/leave/", leaveRoute);
app.use("/api/holiday/", holidayRoute);
// error handling
>>>>>>> b171a6b891f302fb991ba94bfc64757919e40ca8
app.use(notFound);
app.use(errorHandler);

// DEFINING PORT
const port = PORT;

// LISTENING TO PORT
app.listen(port, () => {
  console.log(`server is up and running on port: ${port}.`);
});
