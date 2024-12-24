import Todos from "../models/todos.models.js"

const addTodos = (req , res) => {
    console.log ('hellow world')
    res.send ('<h1>todo added</h1>')
}
const getAllTodos = (req , res) => {
    res.send ('all todos obtained')
}
const getSingleTodos = (req , res) => {
    res.send ('Single todo obtained')
}
const deleteTodos = (req , res) => {
    res.send ('todo deleted')
}
const editTodos = (req , res) => {
    res.send ('todo edited')
}

export {addTodos , getAllTodos , getSingleTodos , editTodos , deleteTodos}