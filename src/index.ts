import express from 'express'
import { WebhookConfig } from './config/webhook.config'
import { WebhookRouter } from './routes/webhook.route'
import { IndexRouter } from './routes/index.route'

const app = express()
const PORT = process.env.PORT || 3004

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', IndexRouter);
app.use('/webhook', WebhookRouter);

(async() => {
  await WebhookConfig.setupWebhook()
  
  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
  })
})()
