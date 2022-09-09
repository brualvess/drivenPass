import {
    ICards,
    create,
    findById,
    findByIdUser,
    deleteCard as remove
} from "../repositories/cardsRepository.js";
import Cryptr from 'cryptr';

const cryptr = new Cryptr('myTotallySecretKey')

export async function createCards(datas:Omit <ICards, 'id'>) {
    const encryptedPassword = cryptr.encrypt(datas.password);
    const encryptedCvc = cryptr.encrypt(datas.cvc);
    const obj: Omit <ICards, 'id'> = {
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
export async function getCardById(id: number, userId: number) {
    const card = await findById(id)
    if (!card) {
        throw { type: 'not_found' }
    }
    if (card.userId != userId) {
        throw { type: 'unauthorized' }
    }
    const decryptedPassword = cryptr.decrypt(card.password);
    const decryptedCvc = cryptr.decrypt(card.cvc);

    const obj:ICards = {
        id: id,
        userId: userId,
        title: card.title,
        number: card.number,
        cardHolderName: card.cardHolderName,
        cvc: decryptedCvc,
        expirationDate: card.expirationDate,
        password: decryptedPassword,
        isVirtual: card.isVirtual,
        type: card.type
    }
    return obj;
}

export async function getCards(userId: number) {
    const cards = await findByIdUser(userId)

    if (!cards[0]) {
        throw { type: 'not_found' }
    }
    const result = cards.map(items => 
        {
             const obj: ICards = {
                id: items.id,
                  userId:userId,
                  title: items.title,
                  number: items.number,
                  cardHolderName: items.cardHolderName,
                  cvc: cryptr.decrypt(items.cvc),
                  expirationDate: items.expirationDate,
                  password: cryptr.decrypt(items.password),
                  isVirtual: items.isVirtual,
                  type: items.type
             } 
             return obj
        }
         )
         return result
}

export async function deleteCard(id: number, userId:number) {
    const cards = await findById(id)
    if(!cards){
         throw { type: 'not_found' }
    }
    if (cards.userId != userId) {
         throw { type: 'unauthorized' }
    }

    await remove(id)
}