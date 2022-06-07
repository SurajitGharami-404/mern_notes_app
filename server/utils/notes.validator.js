
const {body, validationResult } = require('express-validator');
// can be reused by many routes
const validations = [
    body('note').not().isEmpty().withMessage("Note can't be empty").trim()
]
// parallel processing
const validate = validations => {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    res.status(400).json({ message: errors.array()[0].msg });
  };
};

module.exports = {
    validate,
    validations
}