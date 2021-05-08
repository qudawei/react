/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-07 15:23:57
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-07 15:35:14
 */
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import React from 'react';
import ReactDOM from 'react-dom';
import  TodoList  from "./TodoList";

ReactDOM.render(
  <React.StrictMode>
    <TodoList></TodoList>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
