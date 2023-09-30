import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParcer from 'body-parser'
import server from './Router/CreateTask.js'
import cors from 'cors'

const app = express()
dotenv.config()
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.send("Server running")
})

mongoose.connect('mongodb://localhost:27017/tudo').then(()=>{
    console.log("DB connected");
})
app.listen(process.env.PORT,()=>{
    console.log(`Server running on ${process.env.PORT}`);
})

app.use('/tudo',server)