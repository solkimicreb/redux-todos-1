import * as api from './api';

export const ADD_TODO_INIT = 'ADD_TODO_INIT';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';
export const GET_TODOS_INIT = 'GET_TODOS_INIT';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';
export const REMOVE_TODO = 'REMOVE_TODO';

export function addTodo(todo) {
  return async dispatch => {
    dispatch(addTodoInit());
    try {
      todo = await api.addTodo(todo);
      dispatch(addTodoSuccess(todo));
    } catch (error) {
      dispatch(addTodoError(error));
    }
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

export function getTodos() {
  return async dispatch => {
    dispatch(getTodosInit());
    try {
      const todos = await api.getTodos();
      dispatch(getTodosSuccess(todos));
    } catch (error) {
      dispatch(getTodosError(error));
    }
  };
}

export function getTodosInit() {
  return { type: GET_TODOS_INIT };
}

export function getTodosError(error) {
  return { type: GET_TODOS_ERROR, error };
}

export function getTodosSuccess(todos) {
  return { type: GET_TODOS_SUCCESS, todos };
}

export function removeTodo(todo) {
  return { type: REMOVE_TODO, todo };
}
