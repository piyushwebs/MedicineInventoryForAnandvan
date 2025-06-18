const Joi = require('joi');

module.exports.medicineSchema = Joi.object({
  listing: Joi.object({
    name:Joi.string().require(),
    description:Joi.string().require(),
    manufactureDate: Joi.string().require(),
    expiryDate: Joi.string().require(),
    quantityAvailable: Joi.number().require(),
    price: Joi.number().require(),
    image: Joi.object({
      url: Joi.string().uri().require(),
    }).require()
  }).require()
})