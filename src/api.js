let todoId = 0;
export async function addTodo(todo) {
  await new Promise(resolve => setTimeout(resolve, 1000));
  return Object.assign({}, todo, { id: todoId++ });
}
