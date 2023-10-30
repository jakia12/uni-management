import express, { Application, NextFunction, Request, Response } from 'express'

const app: Application = express()
import cors from 'cors'

//middleware

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req: Request, res: any, next: NextFunction) => {
  res.send(
    `<h1 style="color:#242B2E;font-size:62px; text-align:center;margin-top:200px">"Database routing successfully"</h1>`,
  )
})

export default app
