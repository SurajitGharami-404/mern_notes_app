const { createCustomError } = require('../config/customError');
const Notes = require('../models/notes.model');

const deleteNote = async(req,res,next)=>{
    const {id} = req.params;
    try {
        const foundNote = await Notes.findById(id);
        if(!foundNote) return next(createCustomError(404,`There isn't any note of id: ${id}`));
        await Notes.findByIdAndDelete(id);
        return res.status(204).json({message:"Deleted succesfully"})   
    } catch (err) {
        return next(createCustomError(400,"Bad request"));
    }
}

module.exports = deleteNote;