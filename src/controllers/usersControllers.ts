import { Request, Response } from "express";
import {
    createUser as signup,
    loginUser as login
} from "../service/usersService.js";

export async function createUser(req: Request, res: Response) {
    const { email, password } = req.body
    await signup(email, password)
    res.status(201).send('user created!')
}
export async function loginUser(req: Request, res: Response) {
    const {email, password } = req.body
   const response = await  login(email, password)
   res.status(200).send(response)
}