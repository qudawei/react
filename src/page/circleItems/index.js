/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-01 19:07:31
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-01 19:18:01
 */
import React from 'react'
import Number from './Number'
export default class Clock extends React.Component {
    render(){
        const numbers = [1, 2, 3, 4, 5];
        return(
            <Number numbers={numbers}></Number>
        )
    }
}
