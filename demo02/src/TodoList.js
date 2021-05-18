/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-10 11:29:01
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-10 15:32:15
 */
import React, { Component } from 'react';
import store from './strore'
import {connect} from 'react-redux'
import {changeInputAction, addItemAction} from './strore/actionCreators'
import {TodoListUi} from './TodoListUi'
 class TodoList extends Component{
    constructor(){
        super();
        this.state = store.getState();
    }
    render(){
        let {inputValue,inputValueChange, list, onClickBtn} = this.props;
        return(
            <TodoListUi 
                inputValue={inputValue}
                inputValueChange={inputValueChange}
                list={list}
                onClickBtn={onClickBtn}
            />
        )
    }
}
//将仓库数据转为本地props
const stateToProps = (state)=>{
    return {
        inputValue :state.inputValue,
        list:state.list
    }
}
const dispatchToProps = (dispatch)=>{
    return{
        inputValueChange(e){
            const action = changeInputAction(e.target.value);
            dispatch(action)
        },
        onClickBtn(inputValue){
            const action = addItemAction(inputValue);
            dispatch(action)
        }
    }
}
// 第一个参数接收数据 第二个参数改变数据
export default connect(stateToProps,dispatchToProps)(TodoList)