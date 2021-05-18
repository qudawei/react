/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-10 14:37:57
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-10 14:56:39
 */
import {CHANGE_INPUT, ADD_ITEM} from './actionTypes'
 
export const changeInputAction = (value)=>({
    type:CHANGE_INPUT,
    value
})
export const addItemAction = (value)=>({
    type:ADD_ITEM,
    value
})