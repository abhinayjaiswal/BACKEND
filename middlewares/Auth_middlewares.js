
import userModel from './../model/model.js'
import jwt from 'jsonwebtoken'

var checkuserAuth =  async(req,res,next)=>{
    let token 
    const {authorization} = req.headers
    if (authorization && authorization.startsWith('Bearer')){
        try{
            token = authorization.split(' ')[1]
            const {UserID} = jwt.verify(token, "secretkey")
            console.log(UserID)
            const user = await userModel.findById(UserID).select('-pass')
            req.user = user
            console.log(req)
        }
        catch(error){
            res.status(401).send({error: "Please authenticate"})

        }
    }
    if(!token) {
        return res.status(401).send({status: 'failed', message: 'unauthorized user'})
    }
    next()

}

export default checkuserAuth