import axios from 'axios';

const api = axios.create({
  baseURL: 'https://react-todos-server.now.sh'
});

export async function addTodo(todo) {
  const { data } = await api.post('/todo', todo);
  return data;
}

export async function getTodos() {
  const { data } = await api.get('/todos');
  return data;
}
export function deleteTodo() {}
