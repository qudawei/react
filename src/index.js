/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-04-26 16:44:03
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-06 15:50:56
 */
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
// import TestJsx from './page/jsx'
// import Clock from './page/clock'
// import LoginControl from './page/loginControl'
// import CircleItems from './page/circleItems'
// import NameForm from './page/NameForm'
// import Calculator from './page/Calculator'
// import App from './page/portal'
import Example from './page/Hook'

// import ChildrenProps from './page/ChildrenProps'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    {/* <Clock />
    <TestJsx name="下班了吗 bro？" />
    <LoginControl/> */}
    {/* <ChildrenProps></ChildrenProps> */}
    {/* <App></App> */}
    <Example></Example>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
