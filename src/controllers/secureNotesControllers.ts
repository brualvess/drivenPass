import { Request, Response } from "express";
import { ISecureNotes } from "../repositories/secureNotesRepository.js";
import {
    createNotes as create,
    getNoteById as findById
} from "../service/secureNotesService.js";

export async function createNotes(req: Request, res: Response) {
    const datas: ISecureNotes = req.body
    await create(datas)
    res.status(200).send('create note')
}
export async function getNoteById(req: Request, res: Response) {
    const id = Number(req.params.id)
    const userId = req.body.userId
    const response = await findById (id, userId)
        res.status(200).send(response);
}
export async function getNotes(req: Request, res: Response) {
    const userId = req.body.userId
    
        res.sendStatus(200);
}
export async function deleteNotes(req: Request, res: Response) {

}
