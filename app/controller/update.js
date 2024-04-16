const Todo = require ('../model/todo_model')

exports.update = async (req, res) =>{
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(todo)
    }catch(error) {
        res.status(500).json({message: error.message})
    }
}