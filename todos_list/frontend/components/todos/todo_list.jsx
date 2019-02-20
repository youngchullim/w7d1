import React from 'react'
import TodoListItem from '../todo_list/todo_list_item'
import AddToDo from '../todo_list/todo_form'
import {receiveTOafdDO} from '../../actions/todo_actions'
const TodoList = ({todos, receiveTODO}) => (
  <>
  <h3>Todo List goes here!</h3>
   <ul>
    {todos.map (todo => 
      <TodoListItem todo={todo} key={todo.id}/>
     )}
   </ul>
   <AddToDo receiveTODO={receiveTODO} />
  </>
)

export default TodoList