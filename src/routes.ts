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
import {
    createNotes,
    getNoteById,
    getNotes,
    deleteNote
} from './controllers/secureNotesControllers.js';
import {
    createCard,
    getCardById,
    getCards,
    deleteCard
} from './controllers/cardsControllers.js';
import { schemaSecureNotes } from './schemas/secureNotesSchema.js';
import { schemaCards } from './schemas/cardsSchema.js';
import {
    createWifi,
    getWifiById,
    getWifi,
    deleteWifi
} from './controllers/wifiControllers.js';
import { schemaWifi } from './schemas/wifiSchema.js';

const router = Router()

// routes users
router.post('/signup', joiValidation(schemaSignup), createUser)
router.post('/signin', joiValidation(schemaSignin), loginUser)
// routes credentials
router.post('/credential', authUser, joiValidation(schemaCredentials), createCredentials)
router.get('/credential/:id', authUser, getById)
router.get('/credential', authUser, getCredentials)
router.delete('/credential/:id', authUser, deleteCredential)
//routes secure notes
router.post('/secureNotes', authUser, joiValidation(schemaSecureNotes), createNotes)
router.get('/secureNotes/:id', authUser, getNoteById)
router.get('/secureNotes', authUser, getNotes)
router.delete('/secureNotes/:id', authUser, deleteNote)
//routes cards
router.post('/card', authUser, joiValidation(schemaCards), createCard)
router.get('/card/:id', authUser, getCardById)
router.get('/card', authUser, getCards)
router.delete('/card/:id', authUser, deleteCard)
// routes wifi
router.post('/wifi', authUser, joiValidation(schemaWifi), createWifi)
router.get('/wifi/:id', authUser, getWifiById)
router.get('/wifi', authUser, getWifi)
router.delete('/wifi/:id', authUser, deleteWifi)






export default router