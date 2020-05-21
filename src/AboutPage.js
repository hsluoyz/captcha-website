import React from 'react';

class AboutPage extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>
          This website is used for collecting the users' mouse interaction data. These data will be used for our further study related to normal human interactions when viewing the webpage. We have developed a web-based <a href="https://github.com/microsoft/mouselog">software</a> that integrates collection, analysis and visualization of mouse interaction data.
        </p>
        <p>
          Feel free to contact me if you have any question via kingiw@hotmail.com. (<a href="https://github.com/kingiw">Github</a>)
        </p>
        <p>
          这是一个用于搜集用户在浏览页面过程中的鼠标行为的网站。我们希望能够搜集正常用户的鼠标行为并用于后续的研究工作中。目前我们专门设计并开源了一个基于网页的，集搜集、分析、可视化为一体的鼠标行为分析的<a href="https://github.com/microsoft/mouselog">软件</a>。
        </p>
        <p>
          如果你对我的研究感兴趣，请联系我: kingiw@hotmail.com。(<a href="https://github.com/kingiw">Github</a>)
        </p>
      </div>
    );
  }
}
export default AboutPage;