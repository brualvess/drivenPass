import Cryptr from 'cryptr';
import { create} from '../repositories/credentialsRepository.js';

const cryptr = new Cryptr('myTotallySecretKey')

export async function createCredentials(userId: number, url:string,
     username:string, password:string, title:string){
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