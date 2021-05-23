import { Request, Response }  from 'express'
import { MessageHandler } from '../models/message-handler.model'

export class WebhookController {
  static webhookGet(req: Request, res: Response) {
    res.status(200).json({
      success: true,
      code: 'AUTHORIZED'
    })
  }

  static webhookPost(req: Request, res: Response) {
    res.sendStatus(200)
    MessageHandler.handleMessage(req.body)
  }
}