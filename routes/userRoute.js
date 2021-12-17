import express from "express";
// importing signup controller.
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";
import { verifyToken } from "../middlewares/tokenAuth.js";
import {
  userRegisterValidators,
  userLoginValidators,
} from "../validators/auth.js";
import { runValidate } from "../validators/index.js";

const router = express.Router();

router.post("/register", userRegisterValidators, runValidate, registerUser);
router.post("/login",userLoginValidators,/* runValidate*/verifyToken,loginUser);
router.get("/get/:userId", getUser);
router.get("/getAll", getAllUsers);
router.patch("/delete/:userId", deleteUser);
router.patch("/update/:userId", updateUser);

export default router;
