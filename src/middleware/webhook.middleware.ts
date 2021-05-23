import { Request, Response, NextFunction } from 'express'

export function tokenValidator(req: Request, res: Response, next: NextFunction) {
	const token = req.params.token
	console.log({token})
	if(token === process.env.TELEGRAM_BOT_TOKEN) {
		next()
	} else {
		res.status(401).json({success: false, code: 'NOT_AUTHORIZED'})
	}
}
