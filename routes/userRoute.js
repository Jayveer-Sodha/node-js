import express from "express";
// importing signup controller.
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
<<<<<<< HEAD
  updateProfilePic,
  forgetPassword,
  resetPassword,
=======
>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
} from "../controllers/userController.js";
import { verifyToken } from "../middlewares/tokenAuth.js";
import {
  userRegisterValidators,
  userLoginValidators,
} from "../validators/auth.js";
import { runValidate } from "../validators/index.js";

const router = express.Router();

<<<<<<< HEAD
import multer from "multer";
import { canAccess } from "../middlewares/roleAuth.js";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/profile/");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post("/register", userRegisterValidators, runValidate, registerUser);
router.post("/login", userLoginValidators, runValidate, loginUser);

router.get("/get/:userId", verifyToken, canAccess, getUser);

router.get("/all", verifyToken, canAccess, getAllUsers);

router.patch("/delete/:userId", verifyToken, canAccess, deleteUser);
router.patch("/update/:userId", verifyToken, canAccess, updateUser);

router.post("/profile", upload.single("profile-pic"), updateProfilePic);

router.post("/forget-password", forgetPassword);

router.post("/reset-password", resetPassword);
=======
router.post("/register", userRegisterValidators, runValidate, registerUser);
router.post(
  "/login",
  userLoginValidators,
  /* runValidate*/
  verifyToken,
  loginUser
);
router.get("/get/:userId", verifyToken, getUser);
router.get("/getAll", verifyToken, getAllUsers);
router.patch("/delete/:userId", verifyToken, deleteUser);
router.patch("/update/:userId", verifyToken, updateUser);

>>>>>>> 09b3607175c4ee0ab64454a276e929c27a8bdcff
export default router;
