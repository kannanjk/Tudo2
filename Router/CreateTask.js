import express from 'express'
import { createTask, deleteTask, editTask, getTask } from '../Controller/CreateTask.js'

const server = express()

server.post('/createTask',createTask)
server.get('/getTask',getTask)
server.post('/deleteTask',deleteTask)
server.post('/editTask',editTask)
// server.post("/markAsRead",)


export default server  