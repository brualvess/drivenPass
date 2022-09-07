import joi from 'joi'
export const schemaCredentials =  joi.object({
	userId: joi.number().required(),
    url: joi.string().uri().required(),
    userName: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required()
});