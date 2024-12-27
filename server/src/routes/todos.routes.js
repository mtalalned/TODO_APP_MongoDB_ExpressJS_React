import express from 'express'
import {addTodos , getAllTodos , getSingleTodos , editTodos , deleteTodos} from "../controllers/todos.controllers.js"

const router = express.Router()

router.get ('/todo' , getAllTodos)
router.get ('/todo/:id' , getSingleTodos)
router.post ('/todo' , addTodos)
router.put ('/todo/:id' , editTodos)
router.delete ('/todo/:id' , deleteTodos)

export default router