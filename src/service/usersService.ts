import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { findByEmail, create } from '../repositories/usersRepository.js';
import { IUsers } from '../repositories/usersRepository.js';
import dotenv from "dotenv";

dotenv.config()

export async function createUser(email: string, password:string){
    const usersEmail = await findByEmail(email)
    if(usersEmail[0]){
        throw {type:'conflict'}
    }
    const passwordEncrypted = bcrypt.hashSync(password, 10);
    const obj:Omit <IUsers, 'id'> = {email:email, password:passwordEncrypted}
    await create(obj)
}
export async function loginUser(email: string, password:string){
    const users = await findByEmail(email)
    if(!users[0]){
        throw {type:'unauthorized'}
    }
    const verifyPassword = bcrypt.compareSync(password, users[0].password)
    if(!verifyPassword){
        throw {type:'unauthorized'}
    }
    const token = jwt.sign(email, process.env.SECRET )
    return token;
    
}