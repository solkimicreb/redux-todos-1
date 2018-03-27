import { connect } from 'react-redux';
import TodoList from './TodoList';

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps)(TodoList);
