import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar'
import News from './components/News'
import { TOGGLE_MODES, TOGGLE_MODE_BG_COLOR_MAP, TOGGLE_MODE_COLOR_MAP, TOGGLE_MODE_MAP } from './utils/constants';

export class App extends Component {
  pageSize = 5;
  constructor() {
    super();
    this.state = {
      mode: TOGGLE_MODES.LIGHT
    };
  }
  toggleMode = () => {
    this.setState({
      mode: TOGGLE_MODE_MAP[this.state.mode]
    }, function () {
      document.body.style.backgroundColor = TOGGLE_MODE_BG_COLOR_MAP[this.state.mode];
      document.body.style.color = TOGGLE_MODE_COLOR_MAP[this.state.mode];
    });
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
          <Switch>
            <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general" mode={this.state.mode} /></Route>
            <Route exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="business" mode={this.state.mode} /></Route>
            <Route exact path="/entertainment"><News key="entertainment" pageSize={this.pageSize} country="in" category="entertainment" mode={this.state.mode} /></Route>
            <Route exact path="/general"><News key="general" pageSize={this.pageSize} country="in" category="general" mode={this.state.mode} /></Route>
            <Route exact path="/health"><News key="health" pageSize={this.pageSize} country="in" category="health" mode={this.state.mode} /></Route>
            <Route exact path="/science"><News key="science" pageSize={this.pageSize} country="in" category="science" mode={this.state.mode} /></Route>
            <Route exact path="/sports"><News key="sports" pageSize={this.pageSize} country="in" category="sports" mode={this.state.mode} /></Route>
            <Route exact path="/technology"><News key="technology" pageSize={this.pageSize} country="in" category="technology" mode={this.state.mode} /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App
