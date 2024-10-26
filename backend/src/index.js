import connectDB from "./db/index.js";
import {app} from "./app.js"
import dotenv from "dotenv";

dotenv.config({
    path: './.env'
});




// as it is an async function it will return a promise so let's use .then and .catch
connectDB()
    .then(() => {

        app.on("error", (error) => {
            console.log("Error in app listening : ", error);
            throw error;
        })

        const port = process.env.PORT || 8000;
        app.listen(port, () => {
            console.log(`⚙️ Server listening on port :  ${port}`);
        })

    })
    .catch((err) => {
        console.log("MongoDb connection failed !!! : ", err);
    })









// function connectDB(){} -> wrap in try-catch and async-await

// connectDB()

//NOTE : Better appraoch and readability is better than the previous one

//iife
/* ;(async () => {
    try { 
        const dbStatus = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // console.log(dbStatus);

        app.on("error",(error) => {
            console.error("Error : ",error);
            throw error;
        })

        app.listen(process.env.PORT,()=> {
            console.log(`App id Listening on port ${process.env.PORT}`)
        })


    } catch (error) {
        console.error("Error : ",error);
        throw error;
     }
})();
*/