const { createCustomError } = require('../config/customError');
const Notes = require('../models/notes.model');
const countPage = require("../utils/countPage");
const getAllNotes = async (req, res, next) => {
    const pageNumber = req.query.page || 1;
    try {
        const limit = 5;
        const skipAmount = limit * (Number(pageNumber) - 1);
        const totalNotesCount = await Notes.count();
        const totalPageCount = countPage(totalNotesCount,limit);
        const notesArray = await Notes.find({}, { note: 1, updatedAt: 1 }).limit(limit).skip(skipAmount);
        return res.status(200).json({
            totalPages: String(totalPageCount),
            currentPageNumber: pageNumber,
            totalNotes:String(totalNotesCount),
            notes: notesArray
        })
    } catch (err) {
        return next(createCustomError(404, "No notes found..."))
    }
}

module.exports = getAllNotes;