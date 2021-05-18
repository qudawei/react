/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-08 14:20:53
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-10 10:56:29
 */
import axios from 'axios'
import {CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST, GET_MY_LIST} from './actionTypes'
export const changeInputAction = (value) =>({
    type:CHANGE_INPUT,
    value
})
export const addItemAction = (value) =>({
    type:ADD_ITEM,
    value
})
export const delItemAction = (value) =>({
    type:DELETE_ITEM,
    value
})
export const getListAction = (data) =>({
    type:GET_LIST,
    data
})
export const getTodoList = () =>{
    return (dispatch)=>{
        axios.get('https://mock.mengxuegu.com/mock/609605c7c7b7385be0a82c6e/example/getItemList')
        .then((res)=>{
            const data = res.data.data.list;
            const action = getListAction(data)
            dispatch(action);
        })
    }
}
export const getMyListAction = () =>({
    type:GET_MY_LIST,
})
