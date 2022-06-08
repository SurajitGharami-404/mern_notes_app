
const { createCustomError } = require('../config/customError');
const Note = require('../models/notes.model');
const createNote = async (req,res,next)=>{
    let {note} = req.body;

    const rgx = new RegExp(/\<.*?\>/g);
    note = new String(note).replace(rgx,"");
    try {
        const newNote = new Note({
            note
        });
        await newNote.save();
        return res.status(201).json({message:"Successfully created"});
    } catch (err) {
        console.log(err.message)
        return next(createCustomError(400,err.message))
    }
}

module.exports = createNote;