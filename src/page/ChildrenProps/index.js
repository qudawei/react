/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-02 10:29:39
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-06 15:51:26
 */
import React from 'react'
// import FancyBorder from '../FancyBorder'
import  './index.css'
export default class ChildrenProps extends React.Component {
    render() {
        let jack = 'h1';
        return [
            <h1 key={jack} >what does the fox say?</h1>,
            // 不要忘记设置 key :)
            <li key="A">First item</li>,
            <li key="B">Second item</li>,
            <li key="C">Third item</li>,
            ChildrenProps.ListOfTenThings()
          ];
        // return (
        //     <FancyBorder color="blue" name="jack">
        //         <h1 className="Dialog-title">
        //             Welcome
        //         </h1>
        //         <p className="Dialog-message">
        //             Thank you for visiting our spacecraft!
        //         </p>
        //     </FancyBorder>
        // )
    }
    // 调用子元素回调 numTimes 次，来重复生成组件
   static Repeat(props) {  
        let items = [];
        for (let i = 0; i < props.numTimes; i++) {
        items.push(props.children(i));
        }
        return <div>{items}</div>;
    }
  
    static ListOfTenThings() {
        return (
        <ChildrenProps.Repeat numTimes={10} key="test">
            {(index) => <div key={index}>This is item {index} in the list</div>}
        </ChildrenProps.Repeat>
        );
    }
}