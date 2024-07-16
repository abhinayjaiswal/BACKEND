import mongoose from 'mongoose'

const mongodb = async () => {
    mongoose.connect("mongodb://localhost:27017/imscollege")
    const db = mongoose.connection
    db.on("connected", () => {
        console.log("database connected")
    })
    db.on("error", () => {
        console.log("database not connected")
    })
    db.on('disconnected', () => {
        console.log("database disconnected")
    })
}

export default mongodb

