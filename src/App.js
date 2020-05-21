import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import TopMenu from './Menu';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import VirtualKeyboard from './VirtualKeyboard';
import RandomForm from './FormFilling';
import MySlider from './Slider';

class App extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TopMenu />
        <div className="Container">
          {/* <div style={{padding: 24, minHeight: 280 }}>Content</div> */}
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={AboutPage}/>
            <Route exact path="/virtualKeyboard" component={VirtualKeyboard}/>
            <Route exact path="/formfilling" component={RandomForm}/>
            <Route exact path="/slider" component={MySlider}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;