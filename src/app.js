import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// app.use(cors()) // if u want u can only do till here but for better configuration and to allow ony certain url to talk to your backend we have certain options in CORS  

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true,
    optionsSuccessStatus:200
}))

app.use(express.json({limit:"16kb"})) 
app.use(express.urlencoded({extended:true,limit:"16kb"}))
app.use(express.static("public"))
app.use(cookieParser())


// Router import
import userRouter from "./routes/user.routes.js";

//routes declaration
// previously we were doing app.get bcoz the router and controller were defined in the same file but now we are doing it in different file so we have to use middlewares to get the routes and controllers 
app.use("/api/v1/users",userRouter); // this will pass control to userRouter and then it will pass control to userController
// it is standard practice to write as /api/v1/ in url if u are passing or using api as it describe the version of ur api 


// http://localhost:8000/api/v1/users/register
export {app};