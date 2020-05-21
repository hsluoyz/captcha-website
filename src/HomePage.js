import React from 'react';

class HomePage extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>Q: 这是什么? / What's this?</p>
        <p>A: 这是用于搜集研究数据的一个网站。数据不涉及任何您的隐私内容。This website is for collecting some specified data for research. The collected data are not privacy-sensitive.</p>
        <p>Q: 如何使用? / How to use?</p>
        <p>A: 选择应用并按照要求完成里面的一些操作。/ Follow the instructions in the applications.</p>
      </div>
    );
  }
}

export default HomePage;