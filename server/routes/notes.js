const router = require('express').Router();
const {validate,validations} = require('../utils/notes.validator');

router.get("/get-notes",require('../controllers/getAllNotes'));
router.post("/add-note",validate(validations),require('../controllers/createNote'));

module.exports = router;