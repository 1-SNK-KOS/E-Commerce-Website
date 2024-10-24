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

export {app};