import express from 'express'
const IndexRouter = express.Router()

IndexRouter.get('/', (req: express.Request, res: express.Response) => {
  res.json({
    success: true,
    code: 'SUCCESS',
    message: 'Hello World'
  })
})

export {
  IndexRouter
}