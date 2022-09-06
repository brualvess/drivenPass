import { Router } from 'express';
import joiValidation from './middlewares/joiValidation.js';
import {
    schemaSignup,
    schemaSignin
} from './schemas/usersSchema.js';
import {
    createUser,
    loginUser
} from './controllers/usersControllers.js';

const router = Router()

// routes users
router.post('/signup', joiValidation(schemaSignup), createUser)
router.post('/signin', joiValidation(schemaSignin), loginUser)



export default router