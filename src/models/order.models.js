import mongoose,{Schema} from "mongoose";

const orderSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        orderItems : {
            type : Array,
            required : [true,"Order items are required"]
        },
        status : {
            type : String,
            required : [true,"Status is required"],
            default : "Order Placed"
        },
        paymentMethod : {
            type : String,
            required : [true,"Payment method is required"]
        },
        payment  : {
            type : Boolean,
            required : [true,"Payment status is required"],
            default : false
        },
        address : {
            type : Schema.Types.ObjectId,
            ref : "Address",
            required : [true,"Address is required"]
        },
        totalAmount : {
            type : Number,
            required : [true,"Total amount is required"]
        },
        Date : {
            type : Date,
            default : Date.now,
            required : [true,"Date is required"]
        }

    },{
        timestamps : true
    }
)


export const Order = mongoose.model("Order",orderSchema);