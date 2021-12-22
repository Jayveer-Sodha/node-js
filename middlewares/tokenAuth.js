import jwt from "jsonwebtoken";
<<<<<<< HEAD
// import { JWT_SECRET } from "../config/environmentVariables.js";
import dotenv from "dotenv";
dotenv.config();

import jsonResponse from "../utils/json-response.js";
import responseCodes from "../helpers/response-codes.js";
import { successMessages, errorMessages } from "../utils/response-message.js";

export const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  console.log(token);

  if (!token) {
    return jsonResponse(
      res,
      responseCodes.Forbidden,
      errorMessages.accessTokenRequire,
      {}
    );
=======
import { JWT_SECRET } from "../config/environmentVariables.js";
export const verifyToken = (req, res, next) => {
  let token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];

  // Remove Bearer from string
  token = token.replace(/^Bearer\s+/, "");
  console.log("token: ", token);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
  }

  try {
<<<<<<< HEAD
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);
  } catch (err) {
    return jsonResponse(
      res,
      responseCodes.Unauthorized,
      errorMessages.accesstokenInvalid,
      {}
    );
=======
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
  }

  return next();
};
