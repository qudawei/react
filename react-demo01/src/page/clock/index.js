/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-04-30 16:31:54
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-01 17:35:08
 */
import React from 'react'
import FormateDate from '../formateDate'
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            isToggleOn: true
        };
        // 为了在回调中使用 `this`，这个绑定是必不可少的
        this.dontTouchMe = this.dontTouchMe.bind(this);
    }
    // 方法会在组件已经被渲染到 DOM 中后运行
    componentDidMount() {
        console.log('componentDidMount');
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    //  生命周期方法中清除计时器
    componentWillUnmount() {
        console.log('componentWillUnmount');
        clearInterval(this.timerID);
    }
    tick() {
        // setState 使React 能够知道 state 已经改变了，重新调用render函数
        this.setState({
          date: new Date()
        });
    }
    dontTouchMe(e){
        console.log('e', e)
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
          }));
        e.preventDefault();
        console.log('dontTouchMe pleadse');
    }
    render() {
        return (
            <div>
                <FormateDate date={this.state.date}></FormateDate>
                <button onClick={this.dontTouchMe}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
export default Clock