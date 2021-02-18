
// User Contollers
const User = require('../models/User')
const { to, ReE, ReS } = require('../services/util.service')
const CONFIG = require('../config/config')
const { isNull } = require('../services/util.service')
const HttpStatus = require('http-status')
const validator = require('validator')
const { isEmail } = validator
const ObjectId = require('mongoose').Types.ObjectId
const notificationService = require('../services/notification.service')
const authService = require('../services/auth.service')

module.exports.userRegister = async (req, res) =>{
    let body= req.body;
    let err, user,response;

    let fields = [
        'email',
          'staffId'
    ]

    let invalidFields = fields.filter(field =>{
        if(isNull(body[field])){
            return true
        }
    })

    if (invalidFields.length !== 0) {
        return ReE(res, {message: `${invalidFields} is required!`},
            HttpStatus.BAD_REQUEST)
    }
  
    
    if(!isEmail(body.email)) {return await  ReE(res, 'Valid Email Id required!', HttpStatus.BAD_REQUEST)}
    [err, user] = await to(User.findOne({email:body.email}));
    if(err)return ReE(res, err, HttpStatus.INTERNAL_SERVER_ERROR);
    [err, response] =  await to (notificationService.sendEmail(user.email, {
        subject: 'Confirm email',
        body: '<!DOCTYPE html>\n' +
            '<html>\n' +
            '<body>\n' +
            '<h1>Network Maintenance</h1>\n' +
            `\tPlease use this code to Confirm your email id ${user.verifyCode}.\n` +
            '</body>\n' +
            '</html>\n',
    }))
        if (err) ReS(res, err, 201)
    return ReS(res, {
        message: 'Verification email sent.',
        verifyCode:user.verifyCode,
                token: user.getJWT()
    }, 201)

}

module.exports.getUserDetails  = async function (req, res) {

  return ReS(res,
      { message: 'User found', user: req.user }, HttpStatus.OK)

}

const logout = async function (req, res) {
  let err, userData

  let user = req.user

  user.active = false;

  [err, user] = await to(user.save())
  if (err) {
      return ReE(res, err, 400)
  } else {
      return ReS(res, {
          message: 'Successfully logged out the user',
          user: user,
      }, 200)
  }

}
module.exports.logout = logout



module.exports.setPassword = async(req, res) =>{
    const body = req.body;
   let decoded = req.user
   let user, err, userObj
   let fields = [
    'password',
    'verifyCode'
]
let invalidFields = fields.filter(field =>{
    if(isNull(body[field])){
        return true
    }
})
if (invalidFields.length !== 0) {
    return ReE(res, {message: `${invalidFields} is required!`},
        HttpStatus.BAD_REQUEST)
}
   if(body.verifyCode !== decoded.verifyCode) return ReE(res , {message:'verification code not match'}, HttpStatus.BAD_REQUEST);

//    [err, user] = await to(User.updateOne({_id:decoded._id}, {$set:{codeVerified:true},$unset:{verifyCode:''}}));

   // if(user) return ReS(res, {message:'code verified'}, httpStatus.OK);
   if(err) return ReE(res, {message:'unable to verify'},err, HttpStatus.INTERNAL_SERVER_ERROR);



    if(body.password.length < 8) return ReE(res, {message:'Minimum 8 chracters required!'}, HttpStatus.BAD_REQUEST);
    
//    if(body.password !== body.confirmPassword) return ReE(res, {message:'Password & confirm Password not matching'}, HttpStatus.BAD_REQUEST);



   userObj = decoded;
   switch (decoded.employeeId){
    case 'MCA1234':
    userObj.department="MCA"
    break;
    case 'MSCCS1234':
    userObj.department="MSC CS"
    break;
    case 'MSCIT1234':
    userObj.department="MSC IT"
    break;
    case 'BCA1234':
    userObj.department="BCA"
    break;
    case 'BSCCS1234':
    userObj.department="BSC CS"
    break;
    case 'BSCIT1234':
    userObj.department="BSC IT"
    break;
}
   userObj.codeVerified=true,
   userObj.type='User'
   userObj.password = body.password,
   
   console.log('decoded',userObj);
   [err, user] = await to(userObj.save())
   if(user) return ReS(res, {message:'password Successfully set'}, HttpStatus.OK)
   if(err) return ReE(res, {message:'unable to set password'},err, HttpStatus.INTERNAL_SERVER_ERROR)

}

module.exports.login = async(req, res) =>{
    const body = req.body
    let{password} = body
    let err, compare, existingUser, setActive
    
    // let uniqueKey = await getUniqueField(body);
   
    if(!isEmail(body.email)) return ReE(res, {message:'Valid Email required!'}, HttpStatus.BAD_REQUEST);
    if(isNull(body.email)) return ReE(res, {message:'Person Id or Email Id required!'}, HttpStatus.BAD_REQUEST);
    if(isNull(body.password)) return ReE(res, {message:'Password is required!'}, HttpStatus.BAD_REQUEST);

    [err, existingUser] = await to(User.findOne({ $or: [ { email: body.email} ] } ))
    console.log(existingUser);
    if(err) return ReE(res, {message:'unable to fetch user'},err, HttpStatus.INTERNAL_SERVER_ERROR)
    if((!existingUser)){
        return ReE(res, 'User not yet registered', HttpStatus.BAD_REQUEST)
    }
    if((existingUser.password == null)){
        return ReE(res, 'User not yet registered', HttpStatus.BAD_REQUEST)
    }

    [err, compare] = await to(existingUser.comparePassword(password))
    if(err) return ReE(res, {message:'unable to compare password'},err, HttpStatus.INTERNAL_SERVER_ERROR)
    if (!compare) {
        return ReE(res,
            {message: 'Invalid Username or password. please try again.'},
             HttpStatus.BAD_REQUEST)
    }
    
        [err, setActive] = await to(User.updateOne({email:existingUser.email},{$set:{active:true}}))
        if(err) return ReE(res, {message:'unable to set active'},err, HttpStatus.INTERNAL_SERVER_ERROR)

        existingUser.password = undefined;

        return ReS(res,
             {message:'signed In successfully',user:existingUser, token:existingUser.getJWT()},
              HttpStatus.OK )
 
   
}

