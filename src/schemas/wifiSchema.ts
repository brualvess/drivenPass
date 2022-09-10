
import joi from 'joi'


export const schemaWifi = joi.object({
    userId: joi.number().required(),
    network: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required()
});
