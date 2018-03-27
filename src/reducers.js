import {
  ADD_TODO,
  ADD_TODO_INIT,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  REMOVE_TODO
} from './actions';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

export default combineReducers({
  todos: todosReducer,
  form: formReducer,
  isLoading: isLoadingReducer
});

function isLoadingReducer(state = false, { type }) {
  switch (type) {
    case ADD_TODO_INIT:
      return true;
    case ADD_TODO_SUCCESS:
      return false;
    case ADD_TODO_ERROR:
      return false;
    default:
      return state;
  }
}

function todosReducer(state = [], { type, todo }) {
  switch (type) {
    case ADD_TODO_SUCCESS:
      return [...state, todo];
    case REMOVE_TODO:
      return state.filter(item => item !== todo);
    default:
      return state;
  }
}
