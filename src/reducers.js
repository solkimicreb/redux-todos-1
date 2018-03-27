import {
  ADD_TODO,
  ADD_TODO_INIT,
  ADD_TODO_SUCCESS,
  ADD_TODO_ERROR,
  GET_TODOS_SUCCESS,
  REMOVE_TODO
} from './actions';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

const customFormReducer = formReducer.plugin({
  newTodo(state, { type }) {
    switch (type) {
      case ADD_TODO_SUCCESS:
        return undefined;
      default:
        return state;
    }
  }
});

export default combineReducers({
  todos: todosReducer,
  form: customFormReducer,
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

function todosReducer(state = [], { type, todo, todos }) {
  switch (type) {
    case ADD_TODO_SUCCESS:
      return [...state, todo];
    case GET_TODOS_SUCCESS:
      return todos;
    case REMOVE_TODO:
      return state.filter(item => item !== todo);
    default:
      return state;
  }
}
