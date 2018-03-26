import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { removeTodo } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    removeTodo: todo => dispatch(removeTodo(todo))
  };
}

export default connect(undefined, mapDispatchToProps)(TodoItem);
