import * as puppeteer from 'puppeteer'

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
    });
  }

  public static async getInstance(): Promise<Screenshotter> {
    if(!Screenshotter.instance) {
      Screenshotter.instance = new Screenshotter()
    }
    return Screenshotter.instance
  }

  public async getScreenshotFromHtml(html: string) {
    await this.page.setContent(html)
    const elem = await this.page.$('code')

    return await elem.screenshot({
      path: 'ss2.png',
      encoding: 'binary'
    })
  }
}