const express = require('express')
const connectDB= require("./src/database/index");
const dotenv = require('dotenv').config()
const router = require('./src/router/index')
const cors = require('cors')
const app = express()

app.use(express.json())
app.use(router)
app.use(cors())

app.listen(process.env.PORT , console.log(`app running`))

connectDB().then((con) => {
    console.log(`DATABASE IS CONNECTED`);
  });