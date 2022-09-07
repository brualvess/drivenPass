import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();


export async function authUser (req,res,next){

	const { authorization } = req.headers;
	const token = authorization?.replace('Bearer ', '');

	if(!token) return res.sendStatus(401);

	const secret_key = process.env.SECRET;

	try {
		jwt.verify(token, secret_key, (err) => {
			if(err) return res.sendStatus(403);
			next();
		});
	} catch (error) {
		console.error(error);
		res.sendStatus(500);
	}
}
