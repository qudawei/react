/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-07 15:56:23
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-10 11:15:47
 */
import { createStore } from "redux";
import reducer from "./reducer.js";

//此处方法只接收两个参数，可使用redux 提供的compose来增强函数
const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //此处用于打开redux控制台
);

export default store