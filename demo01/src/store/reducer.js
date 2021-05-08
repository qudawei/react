/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-07 15:58:20
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-08 18:06:03
 */
import { CHANGE_INPUT ,ADD_ITEM, DELETE_ITEM, GET_LIST} from "./actionTypes";

const defaultState = {
    inputVal:'write something',
    list:['早晨7点起床','10点到公司']
};
// reducer是个纯函数 由传递的参数决定返回结果  
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) =>{
    //reducer 里面只能接受state，不能改变state
    let newState = JSON.parse( JSON.stringify(state));
    switch(action.type){
        case CHANGE_INPUT:
            newState.inputVal = action.value;
            return newState;
        case ADD_ITEM:
            newState.list.push(action.value);
            newState.inputVal = ''
            return newState;
        case DELETE_ITEM:
            newState.list.splice( action.value, 1);
            return newState;
        case GET_LIST:
            newState.list = action.data;
            return newState;
        default:
    }
    return state;
}