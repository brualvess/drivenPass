import { Request, Response } from "express";
import {
    ICards,
    
} from "../repositories/cardsRepository.js";
import { createCards } from "../service/cardsService.js";

export async function createCard(req: Request, res: Response) {
    const datas: ICards = req.body
    await createCards(datas)
    res.status(201).send('create card !')
}

export async function getCardById(req: Request, res: Response) {

}

export async function getCards(req: Request, res: Response) {

}

export async function deleteCard(req: Request, res: Response) {

}
