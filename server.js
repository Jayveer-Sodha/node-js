import express from "express";
import { connectDB } from "./config/dbConnection.js";
import morgan from "morgan";
import bodyParser from "body-parser";
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import cors from "cors";
import { PORT } from "./config/environmentVariables.js";
import multer from "multer";

connectDB();

// initializing our Express application here.
const app = express();
app.use(cors());
app.use("/uploads", express.static("uploads"));
// database connection

//  middleware
app.use(bodyParser.json());
app.use(morgan("dev"));

//import router
import userRoute from "./routes/userRoute.js";
import documentRoute from "./routes/documentRoute.js";
// api calls
app.use("/api/user/", userRoute);
app.use("/api/document/", documentRoute);

const multerImageUpload = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
});

const upload = multer({ storage: multerImageUpload });
app.post("/upload/single", upload.single("image"), (req, res) => {
  console.log(req.file);
  res.status(200).json({
    message: "one image uploaded successfully",
  });
});

app.post("/upload/multiple", upload.array("images", 3), (req, res) => {
  console.log(req.files);
  res.status(200).json({
    message: "multiples image uploaded successfully",
  });
});

// error handling
app.use(notFound);
app.use(errorHandler);

// define port number
const port = PORT;

// listening port
app.listen(port, () => {
  console.log(`server is up and running on port: ${port}.`);
});
