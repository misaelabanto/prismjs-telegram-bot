import { InputFileProxy } from '@grammyjs/types'

export type Telegram = InputFileProxy<Buffer>['Telegram']
export type Opts = InputFileProxy<Buffer>['Opts']

export type RawApi = {
  [M in keyof Telegram]?: Parameters<Telegram[M]>[0] extends undefined
      ? () => Promise<ReturnType<Telegram[M]>>
      : (args: Opts[M]) => Promise<ReturnType<Telegram[M]>>
}
