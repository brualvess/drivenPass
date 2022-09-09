import { ISecureNotes } from "../repositories/secureNotesRepository.js";
import { create, findById } from "../repositories/secureNotesRepository.js";
import Cryptr from 'cryptr';

const cryptr = new Cryptr('myTotallySecretKey')

export async function createNotes(datas:ISecureNotes){
    const encryptedPassword = cryptr.encrypt(datas.note);
    const obj:ISecureNotes ={
        userId: datas.userId,
        title: datas.title,
        note: encryptedPassword
    }
await create(obj);
}

export async function getNoteById(id:number, userId:number){
    const note = await findById(id)
    if (!note) {
        throw { type: 'not_found' }
   }
   if (note.userId != userId) {
    throw { type: 'unauthorized' }
}
const decryptedNote = cryptr.decrypt(note.note);
 const obj = {
    userId: userId,
    title : note.title,
    note : decryptedNote
 }
 return obj;
}