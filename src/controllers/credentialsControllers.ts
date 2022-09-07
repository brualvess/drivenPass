import { Request, Response } from "express";
import { createCredentials as create 
}from "../service/credentialsService.js";
export async function createCredentials(req: Request, res:Response){
const {userId, url, userName, password, title} = req.body;
await create(userId, url, userName, password, title)
res.status(200).send('por enquanto tudo ok');

}