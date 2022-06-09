const router = require('express').Router();
const {validate,validations} = require('../utils/notesValidator');

router.get("/get-notes",require('../controllers/getAllNotes'));
router.get("/get-note/:id",require('../controllers/getSingleNote'));
router.post("/add-note",validate(validations),require('../controllers/createNote'));
router.put("/update-note/:id",validate(validations),require('../controllers/updateNote'));
router.delete("/delete-note/:id",require("../controllers/deleteNote"));

module.exports = router;