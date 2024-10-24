import connectDB from "./db/index.js";
import dotenv from "dotenv";
dotenv.config({
    path:'./.env'
});





connectDB();









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