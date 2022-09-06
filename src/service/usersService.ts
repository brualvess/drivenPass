import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import dotenv from "dotenv";

dotenv.config()

export async function createUser(email: string, password:string){
    const passwordEncrypted = bcrypt.hashSync(password, 10);
    
   
}
export async function loginUser(email: string, password:string){
    const token = jwt.sign(email, process.env.SECRET )
    console.log(token)
}