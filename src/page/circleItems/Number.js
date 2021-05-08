/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-01 19:14:42
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-01 19:20:08
 */
import React from 'react'
export default class Clock extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            numbers:props.numbers
        }
    }
    render(){
        const numbers = this.state.numbers;
            const listItems = numbers.map((number) =>
                <li key={number.toString()}>{number}</li>
            );
            return (
                <ul>{listItems}</ul>
            );
    }
}