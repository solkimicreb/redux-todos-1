import { connect } from 'react-redux';
import TodoList from './TodoList';

function mapStateToProps(state) {
  return {
    todos: state
  };
}

export default connect(mapStateToProps)(TodoList);
