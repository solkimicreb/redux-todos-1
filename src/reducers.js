import { ADD_TODO, REMOVE_TODO } from './actions';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

export default combineReducers({
  todos: todosReducer,
  form: formReducer
});

function todosReducer(state = [], { type, todo }) {
  switch (type) {
    case ADD_TODO:
      return [...state, todo];
    case REMOVE_TODO:
      return state.filter(item => item !== todo);
    default:
      return state;
  }
}
