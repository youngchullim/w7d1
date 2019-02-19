import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import {receiveTODOS, receiveTODO} from './actions/todo_actions';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  const store = configureStore();
  window.store = store;
  window.receiveTODOS = receiveTODOS;
  window.receiveTODO = receiveTODO;
  
  ReactDOM.render(
    <Root />, root
  );
});


