import express from "express";
import { connectDB } from "./config/dbConnection.js";
// import routes
import authRoute from "./routes/userRoute.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
<<<<<<< HEAD
import cors from "cors";
=======
>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
import { PORT } from "./config/environmentVariables.js";

// INITIALIZING EXPRESS APP HERE
const app = express();
<<<<<<< HEAD
app.use(cors());
app.use("/uploads", express.static("uploads"));
// database connection

=======

// DATABASE CONNECTION
connectDB();

>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
// MIDDLEWARE
app.use(bodyParser.json());
app.use(morgan("dev"));

<<<<<<< HEAD
//import router
import userRoute from "./routes/userRoute.js";
import documentRoute from "./routes/documentRoute.js";
import leaveRoute from "./routes/leaveRoute.js";
import holidayRoute from "./routes/holidayRoute.js";
import dashboardRoute from "./routes/dashboardRoute.js";
// api calls
app.use("/api/user/", userRoute);
app.use("/api/document/", documentRoute);
app.use("/api/leave/", leaveRoute);
app.use("/api/holiday/", holidayRoute);
app.use("/api/dashboard", dashboardRoute);
// error handling
=======
// API ROUTES
app.get("/", (req, res) => {
  res.status(200).send("Welcome to ems-backend!");
});

// USER API ROUTES
app.use("/api/user", authRoute);

// ERROR HANDLING
>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
app.use(notFound);
app.use(errorHandler);

// DEFINING PORT
const port = PORT;

// LISTENING TO PORT
app.listen(port, () => {
  console.log(`server is up and running on port: ${port}.`);
});
