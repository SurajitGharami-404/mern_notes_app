const { createCustomError } = require('../config/customError');
const Notes = require('../models/notes.model');

const updateNote = async(req,res,next)=>{
    const {id} = req.params;
    let {note} = req.body;
    const rgx = new RegExp(/\<.*?\>/g);
    note = new String(note).replace(rgx,"");
    try {
        const foundNote = await Notes.findById(id);
        if(!foundNote) return next(createCustomError(404,`There isn't any note of id: ${id}`));
        await Notes.findByIdAndUpdate(id,{note});
        return res.status(204).json({message:"Updated succesfully"})   
    } catch (err) {
        return next(createCustomError(400,"Bad request"));
    }
}

module.exports = updateNote