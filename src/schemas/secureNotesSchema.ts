import joi from 'joi'
export const schemaSecureNotes =  joi.object({
	userId: joi.number().required(),
    title: joi.string().required(),
    note: joi.string().required()
});