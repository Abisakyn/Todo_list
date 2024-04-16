const Todo = require ('../model/todo_model')

exports.deleteTodo = async (req, res) => {

    try{
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({message: 'success'})
    }catch (error){
        res.status(500).json({message: error.message})
    }
}