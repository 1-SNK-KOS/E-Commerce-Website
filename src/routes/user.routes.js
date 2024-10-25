
import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middlewares.js";

const router = Router();

// app.use("/register",userRegister); -> //here we don't need to write this as we are now at route and to pass controller call to controller/methods
router.route("/register").post(
    upload.single('avatar'),
    registerUser
);

export default router;