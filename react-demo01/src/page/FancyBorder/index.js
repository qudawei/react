/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-02 10:31:03
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-02 10:39:26
 */

  import React from 'react'
  export default class FancyBorder extends React.Component{
      render(){
          return(
            <div className={'FancyBorder FancyBorder-' + this.props.color}>
                {this.props.name}
                {this.props.children}
            </div>
          )
      }
  }