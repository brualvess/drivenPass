import { prisma } from '../database.js';

export interface IUsers{
    id: number;
    email: string;
    password: string
}

export async function findUsers(){
const result = await prisma.users.findMany()
return result;
}
export async function findByEmail(email: string){
    const result = await prisma.users.findMany({where:{email}})
    return result
}
export async function create(datas: Omit <IUsers, 'id'>){
    const result = await prisma.users.create({data:datas})
    return result
}