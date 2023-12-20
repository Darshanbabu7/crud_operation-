
const bodyparser = require('body-parser')

const express = require('express')
const connectToMongoDb = require("./db/connection")
require(`dotenv`).config()
const userRoutes = require('./routes/user.route')
const mongoose = require('mongoose')
let app = express()
app.use(bodyparser.urlencoded({extended:true}))


app.use(express.json())
app.use(bodyparser.json())
app.use(express.static(`public`))
app.use("/api/users/",userRoutes)


let server = async ()=>{
    try {
        app.listen(process.env.DEV_PORT,()=>{
            console.log(`server running on port ${process.env.DEV_PORT}`);
        })

        await connectToMongoDb(process.env.DEV_MONGO_URL)
        console.log("mongoDb connected successfully");
        
    } 
    catch (err) {
        console.log(err);
    }
}
server()