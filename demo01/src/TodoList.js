/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-07 15:27:37
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-08 18:11:31
 */
import React, {Component} from 'react'
import store from "./store";
import TodoListUI from './TodoListUI'
import { changeInputAction,addItemAction, delItemAction,getMyListAction } from "./store/actionCreators";
export default class TodoList extends Component{
    constructor(props){
        super(props);
        this.state = store.getState();
        this.changeInputVal = this.changeInputVal.bind(this);
        this.storeChange = this.storeChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.delItem = this.delItem.bind(this);
    }
    componentDidMount(){
        //reducer发生变化 就订阅来改变state状态
        store.subscribe(this.storeChange);
        //此处调用接口若是写在生命周期中会显得臃肿，写在redux中刚好
        const action = getMyListAction();
        // const action = getTodoList();//thunk写法
        store.dispatch(action)
        console.log('action', action);
    }
    delItem(list, index){
        const action = delItemAction(index)
        store.dispatch(action);
    }
    addItem(){
        // const action = {
        //     type:ADD_ITEM,
        //     value:this.state.inputVal
        // }
        const action = addItemAction(this.state.inputVal)
        store.dispatch(action);
    }
    changeInputVal(e){
        // const action = {
        //     type:CHANGE_INPUT,
        //     value:e.target.value
        // }
        const action = changeInputAction(e.target.value)
        store.dispatch(action);
    }
    storeChange(){
        this.setState(store.getState())
    }
    render(){
        return(
                <TodoListUI 
                    inputVal={this.state.inputVal}
                    changeInputVal={this.changeInputVal}
                    addItem={this.addItem}
                    delItem={this.delItem}
                    list={this.state.list}
                />
        )
    }
}