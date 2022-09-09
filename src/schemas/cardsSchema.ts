
import joi from 'joi'


export const schemaCards =  joi.object({
  userId: joi.number().required(),        
  title: joi.string().required(),
  number: joi.string().pattern(/^[0-9 ]+$/).required(),
  cardHolderName: joi.string().required(),
  cvc: joi.string().length(3).required(),
  expirationDate: joi.string().required(),
  password: joi.string().required(),
  isVirtual: joi.boolean().required(),
  type: joi.string().valid('crédito', 'débito', 'crédito/débito')
});



      

          

     

