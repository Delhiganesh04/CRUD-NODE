const express = require('express')
const mongoose = require('mongoose');
const ProductRouter = require('./router/product.router')
const dotenv=require('dotenv')

const app = express()
dotenv.config()

app.use(express.json())

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})

app.use('/api/products',ProductRouter)

mongoose.connect(process.env.MONGO_ACCESS_KEY)
.then(()=>{
  console.log("MangoDB Connected Successfully....!!!");
})
.catch((err) =>{
  console.log(err);
})