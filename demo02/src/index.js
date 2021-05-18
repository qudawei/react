/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-10 11:20:47
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-10 14:26:29
 */
import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux'
import store from './strore'
//provider 提供器 可用于获取store仓库的属性
const App = (
  <Provider store = {store}>
    <TodoList />
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {App}
  </React.StrictMode>,
  document.getElementById('root')
);

