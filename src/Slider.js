import React from 'react';
import {Slider, Button} from 'antd';
import config from './MouselogConfig';

class MySlider extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      sliderValue1: 0,
      sliderValue2: 100,
      targetValue1: this.generateTargetValue(),
      targetValue2: this.generateTargetValue()
    };
  }

  componentDidMount() {
  }

  generateTargetValue() {
    return Math.floor(Math.random() * 101);
  }

  onSliderChange1(value) {
    this.setState({
      sliderValue1: value
    });
  }

  onSliderChange2(value) {
    this.setState({
      sliderValue2: value
    });
  }

  onButtonClick(e) {
    if (this.state.sliderValue === this.state.targetValue) {
      window.location.href = "/slider";
    }
  }

  render() {
    return (
      <div style={{width: 800}}>
        <p>Move the slider to {this.state.targetValue1}</p>
        <Slider defaultValue={0} 
          value={this.state.sliderValue1} 
          onChange={value=>this.onSliderChange1.call(this, value)}/>

        <p>Move the slider to {this.state.targetValue2}</p>
        <Slider defaultValue={100} 
          value={this.state.sliderValue2} 
          onChange={value=>this.onSliderChange2.call(this, value)}/>
        <Button disabled={this.state.sliderValue1 !== this.state.targetValue1 || this.state.sliderValue2 !== this.state.targetValue2}
          onClick={e => this.onButtonClick.call(this,e)}>
                    Submit
        </Button>
      </div>
    );
  }
}

export default MySlider;



