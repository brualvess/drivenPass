import {
    ICards,
    create,
    findById
} from "../repositories/cardsRepository.js";
import Cryptr from 'cryptr';

const cryptr = new Cryptr('myTotallySecretKey')

export async function createCards(datas: ICards) {
    const encryptedPassword = cryptr.encrypt(datas.password);
    const encryptedCvc = cryptr.encrypt(datas.cvc);
    const obj:ICards = {
     
        userId: datas.userId,   
        title: datas.title,
        number: datas.number,
        cardHolderName: datas.cardHolderName,
        cvc: encryptedCvc,
        expirationDate: datas.expirationDate,
        password: encryptedPassword,
        isVirtual: datas.isVirtual,
        type: datas.type
    }
    await create(obj)
}
export async function getCardById(id:number, userId:number) {
    const card = await findById(id)
    if (!card) {
        throw { type: 'not_found' }
   }
   if (card.userId != userId) {
        throw { type: 'unauthorized' }
   }
   const decryptedPassword = cryptr.decrypt(card.password);
   const decryptedCvc = cryptr.decrypt(card.cvc);

   const obj = {
    userId: userId,
    title: card.title,
    number: card.number,
    cardHolderName: card.cardHolderName,
    cvc: decryptedCvc,
    expirationDate: card.expirationDate,
    password: decryptedPassword
   }
   return obj;
}

export async function getCards(userId:number) {

}

export async function deleteCards() {

}