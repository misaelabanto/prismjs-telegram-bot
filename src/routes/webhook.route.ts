import express from 'express'
import { tokenValidator } from '../middleware/webhook.middleware';
import { WebhookController } from '../controllers/webhook.controller';
const WebhookRouter = express.Router()

WebhookRouter.post('/:token', tokenValidator, WebhookController.webhookPost)

export {
  WebhookRouter
}