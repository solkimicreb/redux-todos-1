import { connect } from 'react-redux';
import TodoList from './TodoList';
import { getTodos } from './actions';

function mapStateToProps(state) {
  return {
    todos: state.todos,
    isLoading: state.isLoading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getTodos: () => dispatch(getTodos())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
