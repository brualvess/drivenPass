import Cryptr from 'cryptr';
import {
     create,
     findById, ICredentials
} from '../repositories/credentialsRepository.js';

const cryptr = new Cryptr('myTotallySecretKey')

export async function createCredentials(userId: number, url: string,
     username: string, password: string, title: string) {
     const encryptedPassword = cryptr.encrypt(password);
     const obj = {
          userId: userId,
          url: url,
          username: username,
          password: encryptedPassword,
          title: title
     }
     await create(obj)
}
export async function getById(id: number, userId: number) {
     const credential = await findById(id)
     if (!credential) {
          throw { type: 'not_found' }
     }
     if (credential.userId != userId) {
          throw { type: 'unauthorized' }
     }
     const decryptedPassword = cryptr.decrypt(credential.password);
     const obj: ICredentials = {
          id: id,
          userId: userId,
          username: credential.username,
          url: credential.url,
          password: decryptedPassword,
          title: credential.title
     }
     return obj;
}