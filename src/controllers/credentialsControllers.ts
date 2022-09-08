import { Request, Response } from "express";
import {
    createCredentials as create,
    getById as getId,
    getCredentials as findCredentials,
    deleteCredential as remove
} from "../service/credentialsService.js";

export async function createCredentials(req: Request, res: Response) {
    const { userId, url, username, password, title } = req.body;

    await create(userId, url, username, password, title)
    
    res.status(201).send('credential created !');

}

export async function getById(req: Request, res: Response) {
    const id = Number(req.params.id)
    const userId = req.body.userId
    const response = await getId(id, userId)

    res.status(200).send(response);
}
export async function getCredentials(req: Request, res: Response){
    const userId = req.body.userId
    const response = await findCredentials(userId)
    res.status(200).send(response)
}

export async function deleteCredential(req: Request, res: Response){
    const id = Number(req.params.id)
    const userId = req.body.userId
    await remove (id, userId)
    res.status(200).send('deleted credential !')
}