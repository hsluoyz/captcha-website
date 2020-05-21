import React from 'react';
import {Select, Radio, Button, Row, Col} from 'antd';
import Mouselog from 'mouselog';
import config from './MouselogConfig';
const RadioGroupCount = 6;

class RandomForm extends React.Component {
  constructor(props) {
    super(props);
    this.mouselog = new Mouselog();
    this.state = {
      radioTargetChoices: this.generateRadioTargetChoices(),
      radioChoices: Array(RadioGroupCount).fill("0"),
      ok: false
    };
  }
  
  componentDidMount() {
    this.mouselog.run(config);
  }

  onButtonClick(e) {
    if (this.state.ok) {
      window.location.href = "/formfilling";
    }
  }

  radioGroupOnChange(e) {
    let idx = parseInt(e.target.name[e.target.name.length-1]);
    let radioChoices = Array.from(this.state.radioChoices);
    radioChoices[idx] = e.target.value;
    this.setState({
      radioChoices: radioChoices,
      ok: (() => {
        for (let i = 0; i < RadioGroupCount; ++i) {
          if (radioChoices[i] !== this.state.radioTargetChoices[i]) {
            return false;
          }
        }
        return true;
      })()
    });
  }

  generateRadioTargetChoices() {
    let arr = [];
    for (let i = 0; i < RadioGroupCount; ++i) {
      arr.push(`${Math.floor(Math.random() * 4)+1}`);
    }
    return arr;
  }

  renderRadios() {
    let arr = [];
    for (let i = 0; i < RadioGroupCount; ++i) {
      arr.push(
        <Row style={{marginBottom: 40}}>
          <Col span="3">{`Choose ${this.state.radioTargetChoices[i]}`}</Col>
          <Col span="36">
            <Radio.Group value={this.state.radioChoices[i]} 
              name={`RadioGroup${i}`} 
              onChange={(e)=>{this.radioGroupOnChange.call(this, e);}}>
              <Radio value="1" style={{marginRight: 30}}>1</Radio>
              <Radio value="2" style={{marginRight: 30}}>2</Radio>
              <Radio value="3" style={{marginRight: 30}}>3</Radio>
              <Radio value="4" style={{marginRight: 30}}>4</Radio>
            </Radio.Group>
          </Col>
          <Col span="3"></Col>
        </Row>
      );
    }
    return arr;
  }

  render() {
    return (
      <div style={{width: 1000}}>
        <p>根据指示选择正确的按钮。</p>
        <p>Select the right answer according to the instructrion.</p>
        {this.renderRadios()}
        <Button disabled={!this.state.ok} onClick={e => this.onButtonClick.call(this,e)}>Submit</Button>
      </div>
    );
  }
}

export default RandomForm;