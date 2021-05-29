import express from "express"
import dotenv from "dotenv"

dotenv.config()
Object.defineProperty(global, 'root', { value: __dirname })

import { WebhookConfig } from "./config/webhook.config"
import { WebhookRouter } from "./routes/webhook.route"
import { IndexRouter } from "./routes/index.route"

import { Screenshotter } from './helpers/screenshot'

const app = express()
const PORT = process.env.PORT || 3004

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use("/", IndexRouter)
app.use("/webhook", WebhookRouter)

;(async () => {
  await WebhookConfig.setupWebhook()
  Screenshotter.getInstance()

  app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
  })
})()
