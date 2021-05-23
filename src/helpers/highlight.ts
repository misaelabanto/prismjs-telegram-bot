import * as Prism from 'prismjs'
import { HTML_CODE_WRAPPER } from '@/constants/highlight.constant'

export class Highlighter {
  static highlight(language: string, code: string) {

    // Returns a highlighted HTML string
    const htmlCode = Prism.highlight(code, Prism.languages[language], language)

    return HTML_CODE_WRAPPER.replace('{{language}}', language).replace('{{code}}', htmlCode);
  }
}