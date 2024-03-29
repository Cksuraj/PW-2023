const express = require("express");
const cors = require("cors");
const { userRoute } = require("./routes/User.route.js");
const { connectdb } = require("./config/db.js");
require("dotenv").config();
const app=express();
app.use(cors());
app.use(express.json()) //middleware to work with json data

app.use("/",userRoute)  // user route

app.listen(process.env.PORT,async()=>{
    await connectdb()
    console.log("Server Started on PORT NO:",process.env.PORT)
})


