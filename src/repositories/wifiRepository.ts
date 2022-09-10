import { prisma } from '../database.js';

export interface IWifi{
    id: number,
    userId: number,
    network: string,
    password: string,
    title: string
}
export async function create(datas:Omit <IWifi, 'id'>) {
    await prisma.wifis.create({ data: datas })
}

export async function findById(id:number){
    const result = await prisma.wifis.findUnique({where:{id}})
    return result
}
export async function findByIdUser(userId:number){
    const result = await prisma.wifis.findMany({where:{userId}})
    return result
}
export async function deleteWifi(id:number){
    const result = await prisma.wifis.delete({where:{id}})
    return result
}