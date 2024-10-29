const jwt = require("jsonwebtoken");
// const express = require('express')
const tokenAuthenticator = (req,res,next)=>{
    try {
        const JWT_SECRET = "happy"
        console.log("happy")
        
        token = req.body.auth_token
        console.log(token)
        const user = jwt.verify(token,JWT_SECRET)
        // console.log(user.id)
        req.id = user.id
        
        next()
        
    } catch (error) {
       req.id=0;
       next()
       
    }
}

module.exports = tokenAuthenticator