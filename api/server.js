import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { nanoid } from 'nanoid'
import { json } from 'express'

dotenv.config({ path: './config.env' })

const app = express()

app.use(cors())
app.use(json())

let todos = [
  {
    id: nanoid(),
    title: 'todo1',
    completed: true
  },
  {
    id: nanoid(),
    title: 'todo2',
    completed: false
  },
  {
    id: nanoid(),
    title: 'todo3',
    completed: false
  },
  {
    id: nanoid(),
    title: 'todo4',
    completed: false
  },
  {
    id: nanoid(),
    title: 'todo5',
    completed: false
  }
]

app.get('/todos', (_req, res) => res.send(todos))

app.post('/todos', (req, res) => {
  const todo = { title: req.body.title, id: nanoid(), completed: false }
  todos.push(todo)
  return res.send(todo)
})

app.patch('/todos/:id', (req, res) => {
  const id = req.params.id
  const index = todos.findIndex((todo) => todo.id === id)
  const completed = Boolean(req.body.completed)
  if (index > -1) {
    todos[index].completed = completed
  }
  return res.send(todos[index])
})

app.delete('/todos/:id', (req, res) => {
  const id = req.params.id
  const index = todos.findIndex((todo) => todo.id === id)
  if (index > -1) {
    todos.splice(index, 1)
  }
  res.send(todos)
})

const PORT = 7000

app.listen(PORT, console.info(`Start server on port ${PORT}`))
