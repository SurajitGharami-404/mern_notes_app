const path = require("path");
const fs = require("fs");
const fsPromise = require("fs/promises");
const {format} = require("date-fns");
const {v4:uuid} = require("uuid");
const logEvents = async(msg,logName)=>{
    const dateTime = format(new Date(),"MM-dd-yy\tHH:mm:ss");
    const log = `${dateTime}\t${uuid()}\t${msg}`;
    try {
        if(!fs.existsSync(path.join(__dirname,"..","logs"))){
            await fsPromise.mkdir(path.join(__dirname,"..","logs"));
        }       
        await fsPromise.appendFile(path.join(__dirname,"..","logs",logName),`\n${log}`);
        return;
    } catch (error) {
        console.log(error);
        return;
    }
}

const logger = (req,res,next)=>{
    const msg = `${req.headers.origin} ${req.method} ${req.url}`;
    console.log(msg);
    logEvents(msg,"reqLogs.txt");
    return next();
}

module.exports ={
    logEvents,
    logger
}