const { CustomError } = require('../config/customError');

const errorHandler = (err,req,res,next)=>{
    if(err instanceof CustomError){
        return res.status(err.statusCode).json({message:err.message});
    }
    else return res.status(500).json({message:err.message});
}
module.exports = errorHandler;