const{Schema, model}=require(`mongoose`)


let userSchema = new Schema({

    fullname:{
        type:String,
        required:[true , "fullname is required"],
        min:[5, "provide more than 5 letters"]
    },
    email:{
        type:String,
        required:[true , "email is required"],
        min:[5, "email required minimum 5 letters"]
    },
    mobile:{
        type:Number,
        required:[true , "number is required"],
        min:[10, "10 numbers required"]
    },
    password:{
        type:String,
        required:[true , "password is required"],
    },
    age:{
        type:Number,
        required:[true , "password is required"],
    }
},{timestamps:true})



let productSchema = new Schema({
    pname:{
        type:String,
        required:[true,"pname is mandatory"],
        min:[5,"pname must be 5 character"]
    },
    price:{
        type:Number,
        required:[true,"price is mandatory"],

    },
    color:{
        type:String,
        required:[true,"color is mandatory"],
    }
},{timestamps:true})

let usercollection = model("user",userSchema)
let productcollection = model("product",productSchema)
module.exports={productcollection,usercollection}
