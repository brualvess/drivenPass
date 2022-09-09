import { prisma } from '../database.js';
export interface ICards {
    id: number
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

export async function create(datas: Omit <ICards, 'id'>) {
    await prisma.cards.create({ data: datas })
}

export async function findById(id:number){
    const result = await prisma.cards.findUnique({where:{id}})
    return result
}
export async function findByIdUser(userId:number){
    const result = await prisma.cards.findMany({where:{userId}})
    return result
}
export async function deleteCard(id:number){
    const result = await prisma.cards.delete({where:{id}})
    return result
}