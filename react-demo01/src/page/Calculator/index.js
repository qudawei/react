/*
 * @Description: 
 * @Version: 
 * @Author: David Qu
 * @Date: 2021-05-01 22:35:24
 * @LastEditors: David Qu
 * @LastEditTime: 2021-05-02 10:35:05
 */
import React from 'react'
import TemperatureInput from '../TemperatureInput'
import BoilingVerdict from '../BoilingVerdict'
export default class Calculator extends React.Component {
    constructor(props) {
      super(props);
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.tryConvert = this.tryConvert.bind(this);
      this.toCelsius = this.toCelsius.bind(this);
      this.toFahrenheit = this.toFahrenheit.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }
    tryConvert(temperature, convert) {
        const input = parseFloat(temperature);
        if (Number.isNaN(input)) {
          return '';
        }
        const output = convert(input);
        const rounded = Math.round(output * 1000) / 1000;
        return rounded.toString();
    }
     toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
      }
      
     toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
      }
      
    handleCelsiusChange(temperature) {
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
  
    render() {
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? this.tryConvert(temperature, this.toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? this.tryConvert(temperature, this.toFahrenheit) : temperature;
  
      return (
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange} />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }
  