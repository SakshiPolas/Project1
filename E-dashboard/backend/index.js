require ('dotenv').config()
const express=require("express");
// require('./db/config');
// const User=require("./db/User");
 const app=express();


// app.post("/register",(req,resp)=>{
//     resp.send("hi api")
// })
// app.listen(5000);
app.listen(process.env.PORT ,()=>{
    console.log("listening to port 4000")
})
app.get("/",(req,resp)=>{
    resp.json({mssg: 'hi api'})
})



