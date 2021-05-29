import puppeteer from "puppeteer"
import { v4 as uuidv4 } from "uuid"
import { SERVER_URL } from "../constants/telegram.constant"
export class Screenshotter {
  private static instance: Screenshotter
  private page: puppeteer.Page
  private constructor() {
    this.initBrowser()
  }

  private async initBrowser() {
    const browser = await puppeteer.launch({ headless: true })
    this.page = await browser.newPage()
    await this.page.setViewport({
      width: 640,
      height: 480,
      deviceScaleFactor: 2,
    })
  }

  public static async getInstance(): Promise<Screenshotter> {
    if (!Screenshotter.instance) {
      Screenshotter.instance = new Screenshotter()
    }
    return Screenshotter.instance
  }

  public async getScreenshotFromHtml(html: string) {
    const fileName = "ss" + uuidv4() + ".png"
    const filePath = `${SERVER_URL}/screenshots/${fileName}`
    await this.page.setContent(html)
    const elem = await this.page.$("code")

    await elem.screenshot({
      path: `${global['root']}/public/screenshots/${fileName}`,
    })
    return filePath
  }
}
