import joi from 'joi'
export const schemaSignup =  joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(10).required(),
});
export const schemaSignin = joi.object({
	email: joi.string().email().required(),
	password: joi.string().min(10).required(),
});