import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { TOGGLE_MODES, TOGGLE_MODE_BG_COLOR_MAP, TOGGLE_MODE_COLOR_MAP, TOGGLE_MODE_MAP } from './utils/constants';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      mode: TOGGLE_MODES.LIGHT
    }
    document.body.style.backgroundColor = TOGGLE_MODE_BG_COLOR_MAP[this.state.mode];
    document.body.style.color = TOGGLE_MODE_COLOR_MAP[this.state.mode];
  }
  toggleMode = () => {
    this.setState({
      mode: TOGGLE_MODE_MAP[this.state.mode],
    })
    document.body.style.backgroundColor = TOGGLE_MODE_BG_COLOR_MAP[this.state.mode];
    document.body.style.color = TOGGLE_MODE_COLOR_MAP[this.state.mode];
  }
  render() {
    return (
      <div>
        <Navbar mode={this.state.mode} toggleMode={this.toggleMode} />
        <News />
      </div>
    )
  }
}

export default App
