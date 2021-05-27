import { TelegramService } from '../services/telegram.service'
import { WEBHOOK_URL, TELEGRAM_BOT_TOKEN } from '../constants/telegram.constant'

export class WebhookConfig {
  public static setupWebhook() {
    return TelegramService.setWebhook({
      url: `${WEBHOOK_URL}/${TELEGRAM_BOT_TOKEN}`
    })
  }
}