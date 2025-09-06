const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
async function registerController(req,res){
 const {email, password, fullName} = req.body
 const {firstname, lastname} = fullName || {} 

 const isUserAlreadyExists = await userModel.findOne({email})

 if(isUserAlreadyExists){
    return res.status(400).json({
        message:'user already exsits'
    })
 }

 const hashedPassword = await bcrypt.hash(password,10)
 const user  = await userModel.create({
    fullName:{
        firstname,
        lastname
    },
    email,
    password : hashedPassword
 })
 const token = jwt.sign({id:user._id},process.env.JWT_SECRET)
res.cookie('token',token)
 return res.status(200).json({
    message:'user created successfully',
    user:{
        firstname:fullName.firstname,
        lastname:fullName.lastname,
        email,
        password
    },
    token
 })
  
}
module.exports = {
    registerController
}