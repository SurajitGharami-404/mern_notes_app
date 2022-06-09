const { createCustomError } = require('../config/customError');
const Notes = require('../models/notes.model');
const getSingleNote = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const foundNote = await Notes.findOne({id}).exec();
        if(!foundNote) return(next(createCustomError(404,"Note not found")));
        const {updatedAt,_id,note}= foundNote;
        return res.status(200).json({updatedAt,_id,note})
    } catch (error) {
        return(next(createCustomError(400,"Bad request")));
    }
}

module.exports = getSingleNote;