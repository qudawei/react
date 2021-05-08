/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-04-30 15:04:37
 * @LastEditors: David Qu
 * @LastEditTime: 2021-04-30 16:24:18
 */
import React from "react"
class TestJsx extends React.Component {
    constructor(props){
        super();
        console.log('props', props);
        console.log('this', this);
        console.log('this.props', this.props);
    }
    render() {
        const name = "Josh Perez 啦啦啦啦";
        return <h1>Hello, {name}</h1>;
    }
}
//上面写法等效于下面写法
// const testJsx = () => {
//     const name = 'Josh Perez 啦啦啦啦';
//     return (
//         <h1 tabIndex="0">what does the fox say?{name}</h1>
//     )
// }
export default TestJsx