import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

import {receiveTODOS, receiveTODO} from './actions/todo_actions';
import {allTodos} from './reducers/selectors';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  const store = configureStore();

  window.store = store;
  window.receiveTODOS = receiveTODOS;
  window.receiveTODO = receiveTODO;
  window.allTodos = allTodos;

  ReactDOM.render(
    <Root store={store}/>, root
  );
});


