import { connect } from 'react-redux';
import TodoAdder from './TodoAdder';
import { addTodo } from './actions';

function mapDispatchToProps(dispatch) {
  return {
    addTodo: todo => dispatch(addTodo(todo))
  };
}

export default connect(undefined, mapDispatchToProps)(TodoAdder);
