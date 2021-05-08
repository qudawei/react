/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-07 15:56:23
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-08 17:40:57
 */
import { createStore ,applyMiddleware, compose} from "redux";
// redux中间件插件
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import mySagas from './sagas.js'
import reducer from "./reducer.js";


// 此处的增强函数可以理解为链式函数
const composeEnhandler = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose


const sagaMiddleware = createSagaMiddleware();
const enhandler = composeEnhandler(applyMiddleware(sagaMiddleware))
// const enhandler = composeEnhandler(applyMiddleware(thunk))
//此处方法只接收两个参数，可使用redux 提供的compose来增强函数
const store = createStore(
    reducer,
    enhandler,
);
sagaMiddleware.run(mySagas)

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //此处用于打开redux控制台
export default store