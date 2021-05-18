/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-10 14:04:21
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-10 14:58:55
 */
import {CHANGE_INPUT, ADD_ITEM} from './actionTypes'
const defaultState={
    inputValue:'david',
    list:['lalsldf'],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) =>{
    console.log('action', action);
    const newState = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case CHANGE_INPUT:
            newState.inputValue = action.value;
            return newState
        case ADD_ITEM:
            newState.list.push(action.value);
            console.log('newState', newState);
            return newState
        default:
    }
    return state;
}