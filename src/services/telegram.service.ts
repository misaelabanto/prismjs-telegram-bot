import { Opts, RawApi, Telegram } from '../interfaces/telegram-service.interface';
import fetch from 'node-fetch'
import FormData from 'form-data'
import { BotCommand, ForceReply, InlineKeyboardMarkup, Message, MessageEntity, MsgWith, ParseMode, ReplyKeyboardMarkup, ReplyKeyboardRemove, Update } from '@grammyjs/types';
import { API_ENDPOINT } from '../constants/telegram.constant'

export class TelegramService implements RawApi {
  private static async callApi<M extends keyof RawApi>(method: M, body: Opts[M] | FormData): Promise<ReturnType<Telegram[M]>> {
    console.log('CALL', `${API_ENDPOINT}/${method}`)
    console.log('Is instance of FormData? ', body instanceof FormData)
    const response = await fetch(
      `${API_ENDPOINT}/${method}`,
      {
        body: body instanceof FormData ? body : JSON.stringify(body),
        method: 'POST',
        headers: {
          'Content-Type': body instanceof FormData ? 'multipart/form-data' : 'application/json'
        }
      }
    ) as Response
    console.log(response)
    return response.text() as ReturnType<Telegram[M]>
  }

  public static async setWebhook(args: { url: string; certificate?: Buffer; ip_address?: string; max_connections?: number; allowed_updates?: readonly (keyof Update)[]; drop_pending_updates?: boolean }): Promise<true> {
    const res = await this.callApi('setWebhook', args)
    console.log(res)
    return true
  }
  
  public static async sendMessage(args: { chat_id: string | number; text: string; parse_mode?: ParseMode; entities?: MessageEntity[]; disable_web_page_preview?: boolean; disable_notification?: boolean; reply_to_message_id?: number; allow_sending_without_reply?: boolean; reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply }): Promise<Message.TextMessage> {
    throw new Error('Method not implemented.')
  }
  
  public static async sendPhoto(args: { chat_id: string | number; photo: string | Buffer; caption?: string; parse_mode?: ParseMode; caption_entities?: MessageEntity[]; disable_notification?: boolean; reply_to_message_id?: number; allow_sending_without_reply?: boolean; reply_markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply }): Promise<Message.PhotoMessage> {
    return this.callApi('sendPhoto', args)
  }
  
  public static async setMyCommands(args: { commands: readonly BotCommand[] }): Promise < true > {
    throw new Error('Method not implemented.')
  }

  public static async editMessageText(args: { chat_id?: string | number; message_id?: number; inline_message_id?: string; text: string; parse_mode?: ParseMode; entities?: MessageEntity[]; disable_web_page_preview?: boolean; reply_markup?: InlineKeyboardMarkup }): Promise < true | (Update.Edited & Message.CommonMessage & MsgWith<'text'>) > {
    throw new Error('Method not implemented.')
  }
  
  public static async editMessageMedia(args: { chat_id?: string | number; message_id?: number; inline_message_id?: string; media: { type: 'audio'; media: string | Buffer; thumb?: string | Buffer; caption?: string; parse_mode?: ParseMode; caption_entities?: MessageEntity[]; duration?: number; performer?: string; title?: string } | { type: 'document'; media: string | Buffer; thumb?: string | Buffer; caption?: string; parse_mode?: ParseMode; caption_entities?: MessageEntity[]; disable_content_type_detection?: boolean } | { type: 'photo'; media: string | Buffer; caption?: string; parse_mode?: ParseMode; caption_entities?: MessageEntity[] } | { type: 'video'; media: string | Buffer; thumb?: string | Buffer; caption?: string; parse_mode?: ParseMode; caption_entities?: MessageEntity[]; width?: number; height?: number; duration?: number; supports_streaming?: boolean } | { type: 'animation'; media: string | Buffer; thumb?: string | Buffer; caption?: string; parse_mode?: ParseMode; caption_entities?: MessageEntity[]; width?: number; height?: number; duration?: number }; reply_markup?: InlineKeyboardMarkup }): Promise < true | (Update.Edited & Message.CaptionableMessage & MsgWith<'document'> & MsgWith<'animation'>) | (Update.Edited & Message.CaptionableMessage & MsgWith<'audio'>) | (Update.Edited & Message.CaptionableMessage & MsgWith<'document'>) | (Update.Edited & Message.MediaMessage & MsgWith<'photo'>) | (Update.Edited & Message.MediaMessage & MsgWith<'video'>) > {
  throw new Error('Method not implemented.')
}
}

