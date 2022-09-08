import { prisma } from '../database.js';

export interface ICredentials{
    userId: number;
    url: string,
    username: string,
    password: string,
    title: string
}

export async function create(datas: ICredentials){
    const result = await prisma.credentials.create({data:datas})
    console.log(result)
    return result
}