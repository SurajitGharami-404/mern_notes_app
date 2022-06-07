const allowedOrigins = require('../config/allowed-origins');
const { createCustomError } = require('../config/customError');

const credentials = (req,res,next)=>{
    const origin = req.headers.origin;
    if(allowedOrigins.includes(origin) || !origin){
        req.header("Access-Allow-Control-Header",true);
        return next();
    }
    return next(createCustomError(401,"Credentials not allowed"));
    
}

module.exports = credentials;