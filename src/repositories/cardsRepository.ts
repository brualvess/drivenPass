import { prisma } from '../database.js';
export interface ICards {
    userId: number
    title: string
    number: string
    cardHolderName: string
    cvc: string
    expirationDate: string
    password: string
    isVirtual: boolean
    type: string
}

export async function create(datas: ICards) {
    await prisma.cards.create({ data: datas })
}