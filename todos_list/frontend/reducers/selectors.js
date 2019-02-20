

export const allTodos = state => {
  const keys = Object.keys(state.todos);
  const result = keys.map(todo => (state.todos[todo]));
  return result;
}
window.allTodos = allTodos;
