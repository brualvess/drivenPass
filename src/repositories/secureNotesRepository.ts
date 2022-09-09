import { prisma } from '../database.js';
export interface ISecureNotes{
    id: number,
    userId: number,
    title: string,
    note: string
}
export async function create(datas:Omit <ISecureNotes, 'id'>){
     await prisma.secureNotes.create({data:datas})
}
export async function findById(id:number){
    const result = await prisma.secureNotes.findMany({where:{id}})
    return result[0]
}

export async function findByUserId(userId:number){
    const result = await prisma.secureNotes.findMany({where:{userId}})
    return result
}
export async function deleteNote(id:number){
     await prisma.secureNotes.delete({where:{id}})
}