import Joi, { number, func } from 'joi';

export const CREATE_USER_SCHEMA = Joi.object().keys({
    firstName: Joi.string().max(20).required(),
    lastName: Joi.string().max(20).required(),
    phoneNumbers: Joi.array().required().min(0).items(Joi.object().keys({
        number: Joi.number().min(1000000000).max(9999999999).required(),
        type: Joi.string().valid("home", "cell", "work").required()
    }))
});

export function validateUserCreation(req, res, next) {
    try {
        Joi.assert(req.body, CREATE_USER_SCHEMA); 
        
        next();
    } catch (err) {
        res.json({
            message: "Invalid data",
            details: err.details
        });
    }
}