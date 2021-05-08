/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-06 15:47:18
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-06 15:58:02
 */
import React, { useState, useEffect } from 'react';
function Example() {
    const [count, setCount] = useState(0);
    console.log('useState', useState);
    console.log('1111', count);
    console.log('2222', setCount);
    // 相当于 componentDidMount 和 componentDidUpdate:   
    useEffect(() => {
        // 使用浏览器的 API 更新页面标题     
        document.title = `You clicked ${count} times`;
        setTimeout(() => {
            setCount(100)
        }, 3000);
    });
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
        </button>
        </div>
    );
}
export default Example