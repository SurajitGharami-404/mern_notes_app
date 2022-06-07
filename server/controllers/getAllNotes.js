const { createCustomError } = require('../config/customError');
const Notes = require('../models/notes.model');
const getAllNotes = async (req, res, next) => {
    const pageNumber = req.query.page || 1;
    try {
        const skipAmount = 5 * (Number(pageNumber) - 1);
        const limit = 5;
        const totalNotesCount = await Notes.count();
        const totalPageCount = String(totalNotesCount / 5);
        const notesArray = await Notes.find({}, { note: 1, updatedAt: 1 }).limit(limit).skip(skipAmount);
        return res.status(200).json({
            totalPages: totalPageCount,
            currentPageNumber: pageNumber,
            notes: notesArray
        })
    } catch (err) {
        return next(createCustomError(404, "No notes found..."))
    }
}

module.exports = getAllNotes;