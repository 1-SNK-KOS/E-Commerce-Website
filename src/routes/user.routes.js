
import { Router } from "express";
import { registerUser , loginUser , logoutUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";
import { verifyJWT } from "../middlewares/auth.middlewares.js";

const router = Router();

// app.use("/register",userRegister); -> //here we don't need to write this as we are now at route and to pass controller call to controller/methods
router.route("/register").post(
    upload.single('avatar'),
    registerUser
);

router.route("/login").post(loginUser);

// secured routes
router.route("/logout").post(verifyJWT,logoutUser)

export default router;