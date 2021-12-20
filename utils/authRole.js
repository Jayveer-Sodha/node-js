import jsonResponse from "./json-response.js";
import { errorMessages } from "./response-message.js";
import jwt from "jsonwebtoken";
export function canAccess(req, res, next) {
  if (!authRole(req)) {
    return jsonResponse(res, 403, errorMessages.invalidRole, {});
  }
  next();
}

export function authRole(req) {
  const decode = jwt.verify(req.body.token, process.env.JWT_SECRET);
  return req.params.userId === decode.id || decode.role === "Admin";
}