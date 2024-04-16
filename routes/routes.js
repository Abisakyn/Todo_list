const express = require('express');
const { add } = require('../app/controller/add');
const { update } = require('../app/controller/update');
const { deleteTodo } = require('../app/controller/delete');
const { getAllTodos } = require('../app/controller/getAll');

const router = express.Router();

router.post('/create/todo',add);
router.get('/getall/todo',getAllTodos)
router.put('/update/todo/:id',update)
router.delete ('/delete/todo/:id',deleteTodo)

module.exports = router;