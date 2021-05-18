/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-01 22:50:18
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-01 22:52:33
 */
import React from 'react'
export default class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.onTemperatureChange(e.target.value);
    }
  
    render() {
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
      };
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }