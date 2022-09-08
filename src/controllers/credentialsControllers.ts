import { Request, Response } from "express";
import { createCredentials as create 
}from "../service/credentialsService.js";

export async function createCredentials(req: Request, res:Response){
const {userId, url, username, password, title} = req.body;

await create(userId, url, username, password, title)
res.status(201).send('credential created !');

}