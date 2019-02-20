import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import {receiveTODO} from '../../actions/todo_actions';



const mapStateToProps = state => ({
  todos: allTodos(state)
})

const mapDispatchToProps = dispatch => ({
  receiveTODO: todo => (dispatch(receiveTODO(todo)))
})

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
