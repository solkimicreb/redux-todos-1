import * as api from './api';

export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_INIT = 'ADD_TODO_INIT';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(todo) {
  return async dispatch => {
    dispatch(addTodoInit());
    try {
      todo = await api.addTodo(todo);
    } catch (error) {
      dispatch(addTodoError(error));
      return;
    }
    dispatch(addTodoSuccess(todo));
  };
}

export function addTodoInit() {
  return { type: ADD_TODO_INIT };
}

export function addTodoError(error) {
  return { type: ADD_TODO_ERROR, error };
}

export function addTodoSuccess(todo) {
  return { type: ADD_TODO_SUCCESS, todo };
}

export function removeTodo(todo) {
  return { type: REMOVE_TODO, todo };
}
