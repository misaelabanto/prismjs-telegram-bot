import { Update } from '@grammyjs/types'
import { Highlighter } from '../helpers/highlight'
import { Screenshotter } from '../helpers/screenshot'
import { TelegramService } from '../services/telegram.service'

export class MessageHandler {
  private static splitLanguageAndCode(text) {
    const [language, ...lines] = text.split('\n')
    return [language, lines.join('\n')]
  }

  public static async handleMessage(update: Update) {
    const text = update.message?.text
    const chat_id = update.message.chat.id
    const [ language, code ] = this.splitLanguageAndCode(text)
    const html = Highlighter.highlight(language, code)
    const screenshotter = await Screenshotter.getInstance()
    const photoBuffer = await screenshotter.getScreenshotFromHtml(html)
    await TelegramService.sendPhoto({
      chat_id,
      photo: photoBuffer as Buffer
    })
  }
}
