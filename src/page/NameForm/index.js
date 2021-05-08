/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-01 22:04:18
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-01 22:27:10
 */
import React from 'react'
export default class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            textArea:'',
            selects:'',
            inputvalue:'',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log('event.target.value ', event.target.value);
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    }

    handleSubmit(event) {
        alert('提交的名字: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    文章:
                    <textarea value={this.state.textArea} name="textArea" onChange={this.handleChange} />
                </label>
                <label>
                选择你喜欢的风味:
                <select value={this.state.selects} name="selects" onChange={this.handleChange}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">酸橙</option>
                    <option value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
                </label>
                <label>
                    名字:
                <input type="text" value={this.state.inputvalue} name='inputvalue' onChange={this.handleChange} />
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}