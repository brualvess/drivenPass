import { Request, Response } from "express";
import { ICards } from "../repositories/cardsRepository.js";
import {
    createCards,
    getCardById as getById,
    getCards as findCards
} from "../service/cardsService.js";

export async function createCard(req: Request, res: Response) {
    const datas: ICards = req.body
    await createCards(datas)
    res.status(201).send('create card !')
}

export async function getCardById(req: Request, res: Response) {
    const id = Number(req.params.id)
    const userId = req.body.userId
    const response = await getById(id, userId)

        res.status(200).send(response);
}

export async function getCards(req: Request, res: Response) {
    const userId = req.body.userId
    const response = await findCards(userId)

        res.status(200).send(response);
}

export async function deleteCard(req: Request, res: Response) {

}
