import { Request, Response } from "express";
import { ISecureNotes } from "../repositories/secureNotesRepository.js";
import {
    createNotes as create,
    getNoteById as findById,
    getNotes as findNotes,
    deleteNote as removeNote
} from "../service/secureNotesService.js";

export async function createNotes(req: Request, res: Response) {
    const datas: ISecureNotes = req.body
    await create(datas)
    res.status(201).send('create note')
}
export async function getNoteById(req: Request, res: Response) {
    const id = Number(req.params.id)
    const userId = req.body.userId
    const response = await findById (id, userId)
        res.status(200).send(response);
}
export async function getNotes(req: Request, res: Response) {
    const userId = req.body.userId
    const response = await findNotes(userId)
        res.status(200).send(response);
}
export async function deleteNote(req: Request, res: Response) {
    const id = Number(req.params.id)
    const userId = req.body.userId
    await removeNote(id, userId)
    res.status(200).send('deleted successfully !')
}
