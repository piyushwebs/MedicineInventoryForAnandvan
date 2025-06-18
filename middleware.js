const ExpressError = require("./utils/ExpressError.js");
const { medicineSchema } = require("./schema.js");

module.exports.validateListing = (req, res, next) => {
  let { error } = medicineSchema.validate(req.body);
  console.log(error);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(","); //we are mapping all the error message and then spration is joined using ","
    throw new ExpressError(500, errMsg);
  } else {
    next(error);
  }
};