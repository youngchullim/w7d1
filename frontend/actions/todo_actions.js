export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

export const receiveTODOS = todos => ({
  type: RECEIVE_TODOS,
  todos
})

export const receiveTODO = todo => ({
  type: RECEIVE_TODO,
  todo
})