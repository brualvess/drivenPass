import {
    ICards,
    create
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
export async function getCardById() {

}

export async function getCards() {

}

export async function deleteCards() {

}