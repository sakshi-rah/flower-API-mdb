import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()

import flower from "./modules/flower.js"

const app = express();
app.use(express.json());
mongoose.connect(process.env.MONGODB_URL, ()=>{
    console.log('connected to mongodb')
})

app.get("/health", (req,res)=>{
  res.json({
    status : 'OK',
    message : 'All Good'
  })
})

app.post('/create-flower',async(req,res)=>{
  const {color,name,size} = req.body

  const newFlower = new flower({
    color: color,
    name: name,
    size: size

  })
  const savedFlower = await newFlower.save()

  res.json({
    success: true,
    data: savedFlower
  })

})

app.listen(5000,()=>{
    console.log('server started running on PORT 5000')
})