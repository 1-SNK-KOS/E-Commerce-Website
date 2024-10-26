import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
   try {
     const DbResp = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    //  console.log(DbResp);
     console.log("MongoDb connected successfully with Host : ",DbResp.connection.host);

   } catch (error) {
     console.error("MongoDb connection failed : ",error);
     process.exit(1);
   }


}

export default connectDB;