const router = require('express').Router();
const {validate,validations} = require('../utils/notesValidator');

router.get("/get-notes",require('../controllers/getAllNotes'));
router.post("/add-note",validate(validations),require('../controllers/createNote'));
router.put("/update-note/:id",validate(validations),require('../controllers/updateNote'));
router.delete("/delete-note/:id",require("../controllers/deleteNote"));

module.exports = router;