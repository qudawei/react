/*
 * @Description: 无状态组件 说白了就是函数或者方法 里面不包含业务逻辑
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-07 19:34:53
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-08 11:20:56
 */
// import React, { Component } from 'react';
import { Input,Button,List, Typography, } from 'antd';

//无状态组件 性能会高一些 能使用无状态组件就使用无状态组件
const TodoListUI = (props) =>{
    return ( 
        <div style={{margin:'20px'}}>
            <div>
                <Input placeholder={props.inputVal} 
                value={props.inputVal} 
                style={{width:'250px',marginRight:'10px'}}
                onChange={props.changeInputVal}
                />
                <Button type="primary" onClick={props.addItem}>增加</Button>
            </div>
            <div style={{width:'300px'}}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={(item, index) => (
                        <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                            <Button style={{float:'right'}} value="small" onClick={() => props.delItem(props.list, index)}>删除</Button>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

// class TodoListUI extends Component {
//     render() { 
//         return ( 
//             <div style={{margin:'20px'}}>
//                 <div>
//                     <Input placeholder={this.props.inputVal} 
//                     value={this.props.inputVal} 
//                     style={{width:'250px',marginRight:'10px'}}
//                     onChange={this.props.changeInputVal}
//                     />
//                     <Button type="primary" onClick={this.props.addItem}>增加</Button>
//                 </div>
//                 <div style={{width:'300px'}}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={(item, index) => (
//                             <List.Item>
//                                 <Typography.Text mark></Typography.Text> {item}
//                                 <Button style={{float:'right'}} value="small" onClick={() => this.props.delItem(this.props.list, index)}>删除</Button>
//                             </List.Item>
//                         )}
//                     />
//                 </div>
//             </div>
//          );
//     }
// }
 
export default TodoListUI;