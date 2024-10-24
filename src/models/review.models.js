import mongoose , {Schema} from "mongoose";

const reviewSchema = new Schema(
    {
        userId : {
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        username : {
            type : String,
            require : [true,"Username is required"]
        },
        productId : {
            type : Schema.Types.ObjectId,
            ref : "Product"
        },
        review : {
            type : String,
            require : [true,"Review is required"]
        },
        rating : {
            type : Number,
            require : [true,"Rating is required"]
        }

    },
    {
        timestamps : true
    }
)

export const Review = mongoose.model("Review",reviewSchema)