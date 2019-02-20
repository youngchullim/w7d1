import { RECEIVE_TODOS, RECEIVE_TODO } from "../actions/todo_actions";
import {merge} from 'lodash'

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  const newState = Object.assign({}, state)
  switch(action.type) {
    case RECEIVE_TODOS:
      return action.todos

    case RECEIVE_TODO:
      return merge(newState, {[action.todo.id]: action.todo})

    default: return state;
  }
} 

export default todosReducer;

