//imports
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const corsOptions = require('./config/cors-options');
const credentials = require('./middlewares/credentials');
const errorHandler = require('./middlewares/errorHandler');
//variable declartions
const app = express();
const PORT = process.env.PORT || 3300 ;

//middlewares
app.use(cors(corsOptions));
app.use(credentials);

//listening
app.use(errorHandler)
const start = async()=>{
    try {
        await db(process.env.MONGO_URL);
        app.listen(PORT,()=>console.log(`Server running on ${PORT}`))
    } catch (err) {
        console.log(err)
    }
}
start();