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
import {
    createCredentials,
    getById,
    getCredentials,
    deleteCredential
} from './controllers/credentialsControllers.js';
import { schemaCredentials } from './schemas/credentialsSchema.js';
import "express-async-errors";
import { authUser } from './middlewares/authUser.js';

const router = Router()

// routes users
router.post('/signup', joiValidation(schemaSignup), createUser)
router.post('/signin', joiValidation(schemaSignin), loginUser)
// routes credentials
router.post('/credential', authUser, joiValidation(schemaCredentials), createCredentials)
router.get('/credential/:id', authUser, getById)
router.get('/credential', authUser, getCredentials)
router.delete('/credential/:id', authUser, deleteCredential)





export default router