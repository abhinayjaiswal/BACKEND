import express from "express"
import cors from "cors"
import dotenv from "dotenv"
// import db from "./model/db.js"
import mongodb from "./model/db.js"
import morgan from 'morgan'
import userRoutes from "./routes/userRoutes.js"

const app = express()
mongodb()   

// middlewares
app.use(express.json())
app.use(morgan('dev'))



// routes
app.use('/api/users', userRoutes )



app.listen(3001, () => console.log("server running"))