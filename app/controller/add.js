const Todo = require('../model/todo_model')

exports.add = async (req,res) =>{

    const { title } = req.body;

    try{
        const todo = new Todo({title})
        await todo.save()
        res.status(200).json({todo})
    }catch(error){
        return res.status(500).json({message: error.message})
    }
}