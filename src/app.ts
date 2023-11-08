import express, { Application, Request, Response } from 'express'
import userRoutes from './app/modules/users/user.route'
const app: Application = express()

import cors from 'cors'

//middleware

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//app all routers
app.use('/api/v1/users', userRoutes)
app.get('/', async (req: Request, res: Response) => {
  // res.send('Server running successfully')

  res.send('Server is working successfully')
})

export default app
