/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-08 17:14:29
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-08 18:17:52
 */
import { put, takeEvery } from "redux-saga/effects";
import axios from 'axios'
import { GET_MY_LIST } from "./actionTypes";
import {getListAction} from './actionCreators'

function* mySaga(){
    //等待监听
    //当GET_MY_LIST执行时候，执行自定义getList函数
    yield takeEvery(GET_MY_LIST, getList)
}
function* getList(){
    const res = yield axios.get('https://mock.mengxuegu.com/mock/609605c7c7b7385be0a82c6e/example/getItemList')
    console.log('saga',res);
    const data = res.data.data.list;
    const action = getListAction(data)
    yield put(action);
}
export default mySaga