import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class TopMenu extends React.Component {

  componentWillMount() {
    const path = window.location.pathname;
    if (path.includes("about")) {
      this.setState({current: "about"});
    } else if (path.includes("virtualkeyboard")) {
      this.setState({current: "virtualkeyboard"});
    } else if (path.includes("formfilling")) {
      this.setState({current: "formfilling"});
    } else {
      this.setState({current: "homepage"});
    }
  }

  render() {
    return (
      <Menu selectedKeys={[this.state.current]}
        mode="horizontal">
        <Menu.Item key="homepage">
          <a href="/"><span><Icon type="home" />主页 Homepage</span></a>
        </Menu.Item>
        <SubMenu title={<span><Icon type="appstore" />应用 App</span>}>
          <Menu.Item key="virtualkeyboard"><a href="/virtualkeyboard">虚拟键盘/Virtual Keyboard</a></Menu.Item>
          <Menu.Item key="formfilling"><a href="/formfilling">填写表格/Form Filling</a></Menu.Item>
          <Menu.Item key="slider"><a href="/slider">滑块/slider</a></Menu.Item>
        </SubMenu>
        <Menu.Item key="about">
          <a href="/about"><span><Icon type="user" />关于 About</span></a>
        </Menu.Item>
      </Menu>
    );
  }
}

export default TopMenu;