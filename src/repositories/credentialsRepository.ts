import { prisma } from '../database.js';

export interface ICredentials{
    id: number,
    userId: number;
    url: string,
    username: string,
    password: string,
    title: string
}

export async function create(datas: Omit <ICredentials, 'id'>){
    const result = await prisma.credentials.create({data:datas})
    return result
}

export async function findById(id:number){
    const result = await prisma.credentials.findMany({where:{id}})
    return result[0]
}

export async function findByIdUser(userId:number){
    const result = await prisma.credentials.findMany({where:{userId}})
    return result
}