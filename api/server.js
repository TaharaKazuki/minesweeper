import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
// import { nanoid } from 'nanoid'
import { json } from 'express'

dotenv.config({ path: './config.env'})

const app = express()

app.use(cors())
app.use(json())

let todos = [

]

app.get('/todos', (req, res) => res.send(todos))

const PORT = 7000

app.listen(PORT, console.info(`Start server on port ${PORT}`))