require('dotenv').config()//instatiate environment variables

let CONFIG = {} //Make this global to use all over the application

CONFIG.app = process.env.APP || 'development'
CONFIG.port = process.env.PORT || '3100'
CONFIG.db_uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/distribution'
CONFIG.jwt_encryption = process.env.JWT_ENCRYPTION || 'network'
CONFIG.jwt_expiration = process.env.JWT_EXPIRATION || '10000'
// CONFIG.adminCode= process.env.adminCode || 'admin@123'
CONFIG.userType=['Staff','Student']
CONFIG.userId=['MCA123','MSCCS123','MSCIT123','BCA123','BSCCS123','BSCIT123']
CONFIG.department=['MCA','MSC CS','MSC IT',"BCA",'BSC CS','BSC IT']
CONFIG.issueType=['Id','Marksheet','Course certificate','Competition Certificate','Sports Certifiacte','Tc']
CONFIG.send_email = process.env.SEND_EMAIL || 'true'

// CONFIG.mg_key = 'bb079f6d9778957e26f2d4fb2aa55594-d5e69b0b-d5134081'
// CONFIG.mg_domain = 'sandbox5811dc2384894e7caa482e15683b0343.mailgun.org'



module.exports = CONFIG