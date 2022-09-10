import { IWifi } from "../repositories/wifiRepository.js";
import Cryptr from 'cryptr';
import {
    create,
    findById,
    findByIdUser,
    deleteWifi
} from "../repositories/wifiRepository.js";

const cryptr = new Cryptr('myTotallySecretKey')

export async function createWifi(datas: Omit<IWifi, 'id'>) {
    const encryptedPassword = cryptr.encrypt(datas.password);
    const obj: Omit<IWifi, 'id'> = {
        userId: datas.userId,
        title: datas.title,
        network: datas.network,
        password: encryptedPassword
    }
    await create(obj);
}
export async function getById(id: number, userId: number) {
    const wifi = await findById(id)
    if (!wifi) {
        throw { type: 'not_found' }
    }
    if (wifi.userId != userId) {
        throw { type: 'unauthorized' }
    }
    const decryptedPassword = cryptr.decrypt(wifi.password);

    const obj:IWifi = {
        id: id,
        userId: userId,
        title: wifi.title,
        network: wifi.network,
        password: decryptedPassword,
        
    }
    return obj;
}

export async function getWifis(userId: number) {
    const wifis = await findByIdUser(userId)

    if (!wifis[0]) {
        throw { type: 'not_found' }
    }
    const decryptedPassword = cryptr.decrypt(wifis[0].password);
    const result = wifis.map(items => 
        {
             const obj: IWifi = {
                id: items.id,
                  userId:userId,
                  title: items.title,
                  network: items.network,
                  password: decryptedPassword,
                  
             } 
             return obj
        }
         )
         return result
}