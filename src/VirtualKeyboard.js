import React from 'react';
import {Row, Col, Button, Icon} from 'antd';
const NumberStringLength=8;

class VirtualKeyboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      target: this.generateRandomNumberString()
    };
  }

  componentDidMount() {
  }

  updateInput(keyStroke) {
    let s = this.state.input;
    if (keyStroke == "x") {
      s = s.substr(0, s.length-1);
    } else {
      s = s += keyStroke;
    }
    this.setState({
      input: s
    });
  }

  generateRandomNumberString(length=NumberStringLength) {
    let s = "";
    for (let i = 0; i < length; ++i) {
      s += Math.floor(Math.random() * 10);
    }
    return s;
  }

  onSubmitClick(e) {
    window.location.href = "/virtualkeyboard";
  }

  render() {
    return (
      <div style={{width: 500}}>
        <p>请通过虚拟数字键盘输入目标序列。</p>
        <p>Please input the target number string with the virtual keyboard.</p>
        <p>目标数字序列/Target Number String: </p>
        <p>{this.state.target}</p>
        <p>当前输入/Current Input: </p>
        <p>
          {this.state.input ? this.state.input : "No Input"}
                    &nbsp;&nbsp;
          {this.state.input == this.state.target ? <Icon type="check" style={{color:"green"}} /> : null}
        </p>

        <Row style={{marginTop: 50}}>
          <Col span="4">
            <Button size="large" onClick={()=>{this.updateInput("1");}}>1</Button>
          </Col>
          <Col span="3"></Col>
          <Col span="4">
            <Button size="large" onClick={()=>{this.updateInput("2");}}>2</Button>
          </Col>
          <Col span="3"></Col>
          <Col span="4">
            <Button size="large" onClick={()=>{this.updateInput("3");}}>3</Button>
          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col span="4">
            <Button size="large" onClick={()=>{this.updateInput("4");}}>4</Button>
          </Col>
          <Col span="3"></Col>
          <Col span="4">
            <Button size="large" onClick={()=>{this.updateInput("5");}}>5</Button>
          </Col>
          <Col span="3"></Col>
          <Col span="4">
            <Button size="large" onClick={()=>{this.updateInput("6");}}>6</Button>
          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col span="4">
            <Button size="large" onClick={()=>{this.updateInput("7");}}>7</Button>
          </Col>
          <Col span="3"></Col>
          <Col span="4">
            <Button size="large" onClick={()=>{this.updateInput("8");}}>8</Button>
          </Col>
          <Col span="3"></Col>
          <Col span="4">
            <Button size="large" onClick={()=>{this.updateInput("9");}}>9</Button>
          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Col span="4">
            <Button size="large" onClick={()=>{this.updateInput("0");}}>0</Button>
          </Col>
          <Col span="3"></Col>
          <Col span="11">
            <Button size="large" onClick={()=>{this.updateInput("x");}}> Backspace/删除 </Button>
          </Col>
        </Row>
        <Row style={{marginTop: 50}}>
          <Button size="large"
            disabled={this.state.input !== this.state.target}
            onClick={e=>this.onSubmitClick.call(this,e)}>
            Submit
          </Button>
        </Row>
      </div>
    );
  }
}

export default VirtualKeyboard;