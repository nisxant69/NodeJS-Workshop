const jwt = require("jsonwebtoken")

exports.isLoggedin = (req,res,next)=>{
     console.log("isLoggedIn function is triggered")
     //RECEIVE Token
     const token = req.cookies.token
     //If No Token
     if(!token){
        res.send("Please Login First")
     }else{
        //Verify the token
        jwt.verify(token,"secretkey",(error,result)=>{
            if(error){
                res.send("Invalid Token")
            } else{
                //req.age=25 yesari data pathauna sakinxa 
                console.log(result)
                next()
            }
        })
     }
}
// const isLoggedin = (req,res)=>{
//      console.log("isLoggedIn function is triggered")
//RECEIVE Token
//      const token = req.cookies.token

//      //If No Token
//      if(!token){
//         res.send("Please Login First")
//      }else{
//         //Verify the token
//         jwt.verify(token,"secretkeyhola",(error,result)=>{
//             if(error){
//                 res.send("Invalid Token")
//             } else{
//                 res.send("TOKEN VALID VERIFIED ! !")
//             }
//         })
//      }
// }
// module.exports= isLoggedin