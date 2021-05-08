/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-01 22:36:31
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-01 23:01:05
 */
import React from 'react'
export default class BoilingVerdict extends React.Component {
    constructor(props){
        super(props);
        debugger
        this.state = {
            celsius:props.celsius
        }
    }
    render(){
        if (this.props.celsius >= 100) {
            return <p>The water would boil.</p>;
          }
        return <p>The water would not boil.</p>;
    }
}