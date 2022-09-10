import { Request, Response } from "express";
import { IWifi } from "../repositories/wifiRepository.js";
import {
    createWifi as create,
    getById,
    getWifis
} from "../service/wifiService.js";

export async function createWifi(req: Request, res: Response) {
    const datas: Omit<IWifi, 'id'> = req.body
    await create(datas)
    res.status(200).send('create Wifi')
}

export async function getWifiById(req: Request, res: Response) {
    const id = Number(req.params.id)
    const userId = req.body.userId
    const response = await getById(id, userId)

        res.status(200).send(response);
}

export async function getWifi(req: Request, res: Response) {
    const userId = req.body.userId
    const response = await getWifis(userId)

        res.status(200).send(response);
}

export async function deleteWifi(req: Request, res: Response) {
    const id = Number(req.params.id)
    const userId = req.body.userId


    res.status(200).send('deleted wifi')
}