import mongoose  from 'mongoose'

const userSchema = new mongoose.Schema({
    name: {type: String, required: true, trim:true},
    email: {type: String, required: true, trim:true, unique: true},
    pass: {type: String, required: true, trim:true},
    tc: {type: Boolean, required: true, trim:true},

})


const userModel = mongoose.model("User", userSchema)


export default userModel

