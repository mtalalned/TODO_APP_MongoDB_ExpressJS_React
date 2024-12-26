import Todos from "../models/todos.models.js"
import mongoose from "mongoose"

const addTodos = async (req , res) => {
    
    const {title , description} = req.body

    if(!title || !description) return res.status(400).json({
        message: 'title or description is required'
    })

    try {
        const todo = await Todos.create ({
            title , description
        })
    
        res.json({
            message: 'todo added successfully', 
            data: todo
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}
const getAllTodos = async (req , res) => {

    try {
        const todo = await Todos.find ({})
        res.json({
            data: todo,
            message: 'All todos obtained'
        })
    } catch(error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}
const getSingleTodos = async (req , res) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({
        message: 'Enter valid id'
    })

    try {
        const todo = await Todos.findById({_id: id})

        if (!todo) return res.status(404).json({
            message: 'no todo found'
        })

        res.json({
            data: todo,
            message: "todo obtained successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}
const deleteTodos = async (req , res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({
        message: 'Enter valid id'
    })
    
    try {
        const todo = await Todos.findByIdAndDelete({_id: id})
        
        if (!todo) return res.status(404).json({
            message: 'no todo found'
        })
        
        res.json({
            deletedTodo: todo,
            message: "todo deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}
const editTodos = async (req , res) => {
    const {id} = req.params
    const {title , description} = req.body

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({
        message: 'Enter valid id'
    })

    if (!title || !description) return res.status(400).json({
        messgage: 'title or description is required'
    })
    
    try {
        const todo = await Todos.findByIdAndUpdate(
            {
                _id: id
            },
            {
                title , description
            },
            {new: true}
        )
        
        if (!todo) return res.status(404).json({
            message: 'no todo found'
        })
        
        res.json({
            updatedTodo: todo,
            message: "todo updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}

export {addTodos , getAllTodos , getSingleTodos , editTodos , deleteTodos}