const allowedOrigins = require('./allowed-origins');
const { createCustomError } = require('./customError');

const corsOptions = {
    origin: (origin,callback) => {
        if(allowedOrigins.includes(origin) || !origin){
            return callback(null,true)
        }
        return callback(createCustomError(401,"CORS denied"))
    }
}
module.exports = corsOptions;