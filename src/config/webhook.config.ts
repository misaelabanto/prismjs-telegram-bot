import { TelegramService } from '@/services/telegram.service'

const WEBHOOK_URL = process.env.WEBHOOK_URL
const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN

export class WebhookConfig {
  public static setupWebhook() {
    return TelegramService.setWebhook({
      url: `${WEBHOOK_URL}/${TELEGRAM_BOT_TOKEN}`
    })
  }
}