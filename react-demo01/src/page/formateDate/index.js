/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-01 17:23:28
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-01 17:28:59
 */
import React from 'react'
class FormateDate extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date:props.date
        }
    }
    render(){
        return (
            <h2>It is {this.state.date.toLocaleTimeString()}. from parents</h2>
        )
    }
}
export default FormateDate