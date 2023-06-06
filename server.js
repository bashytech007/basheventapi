const express = require('express')
const connectDB= require("./src/database/index");
const dotenv = require('dotenv').config()
const router = require('./src/router/index')

const cors = require('cors')
const app = express()

app.use(express.json())
app.use(router)
app.use(cors())

const Port = process.env.PORT
app.listen(Port , console.log(`app running on ${Port}`))

app.get('/', (req,res)=>{
  res.send('hello')
})


connectDB().then((con) => {
    console.log(`DATABASE IS CONNECTED`);
  });