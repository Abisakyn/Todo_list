const Todo = require ('../model/todo_model')

exports.getAllTodos =async (req,res) =>{
    try{
        const todos = await Todo.find()
        res.status(200).json({todos})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}