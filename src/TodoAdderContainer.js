import { connect } from 'react-redux';
import TodoAdder from './TodoAdder';
import { addTodo } from './actions';
import { reduxForm } from 'redux-form';

export default reduxForm({
  form: 'newTodo',
  onSubmit: (todo, dispatch, form) => {
    dispatch(addTodo(todo));
    form.reset();
  }
})(TodoAdder);
