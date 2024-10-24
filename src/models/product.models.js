import mongoose , {Schema} from "mongoose";

const productSchema = new Schema(
    {
        name : {
            type : String,
            required : [true,"Name is required"],
           trim : true
        },
        desc : {
            type : String,
            required : [true,"Description is required"],
            trim : true
        },
        price : {
            type : Number,
            required : [true,"Price is required"],
        },
        sellingPrice : {
            type : Number,
        },
        owner : {
            type : Schema.Types.ObjectId,
            ref : "User"
        },
        image : {
            type : String,
            required : [true,"Image is required"],
        },
        category : {
            type : String,
            required : [true,"Category is required"],
            trim : true
        },
        subCategory : {
            type : Object,
            default : {}
        },
        bestSeller : {
            type : Boolean,
            default : false
        },
        avgRating : {
            type : Number,
            default : 0
        },
        totalStock : {
            type : Number,
            default : 0
        }
    },{
        timestamps : true,
        minimize : false ,
    }
)

export const Product = mongoose.model("Product",productSchema);