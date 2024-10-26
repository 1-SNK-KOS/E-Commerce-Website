import mongoose, {Schema } from "mongoose";


const addressSchema = new Schema(
    { 
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        address : {
            type : String,
            required : [true,"Address is required"]
        },
        city : {
            type : String,
            required : [true,"City is required"]
        },
        state : {
            type : String,
            required : [true,"State is required"]
        },
        country : {
            type : String,
            required : [true,"Country is required"]
        },
        pincode : {
            type : String,
            required : [true,"Pincode is required"]
        },
        phone : {
            type : String,
        },
        notes : {
            type : String,
        }
    },{
        timestamps : true
    }
)

export const Address = mongoose.model("Address", addressSchema);