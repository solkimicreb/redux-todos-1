import { ADD_TODO, REMOVE_TODO } from './actions';

export default function reducer(state = [], { type, todo }) {
  switch (type) {
    case ADD_TODO:
      return [...state, todo];
    case REMOVE_TODO:
      return state.filter(item => item !== todo);
    default:
      return state;
  }
}
