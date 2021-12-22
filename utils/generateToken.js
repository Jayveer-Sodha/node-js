import jwt from "jsonwebtoken";
<<<<<<< HEAD
// import { JWT_SECRET } from "../config/environmentVariables.js";
import dotenv from "dotenv";
dotenv.config();
const generateToken = (id, email, role) => {
  return jwt.sign({ id, email, role }, process.env.JWT_SECRET, {
    expiresIn: "2h",
=======
import { JWT_SECRET } from "../config/environmentVariables.js";
const generateToken = (user) => {
  return jwt.sign({ user }, JWT_SECRET, {
    expiresIn: "7d",
>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
  });
};
export default generateToken;
