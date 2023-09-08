import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
import { TOGGLE_MODE_NAVBAR_COLOR_MAP, TOGGLE_MODE_NAVBAR_BG_COLOR_MAP } from '../utils/constants';

export class Navbar extends Component {
  render() {
    const { mode, toggleMode } = this.props || {};
    return (
      <div>
        <nav className={`navbar navbar-expand-lg data-bs-theme=${TOGGLE_MODE_NAVBAR_BG_COLOR_MAP[mode]} bg-${TOGGLE_MODE_NAVBAR_BG_COLOR_MAP[mode]}`}>
          <div className="container-fluid">
            <Link className="navbar-brand" style={{color: `${TOGGLE_MODE_NAVBAR_COLOR_MAP[this.props.mode]}`}} to="/">NewsMonkey</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link active" style={{color: `${TOGGLE_MODE_NAVBAR_COLOR_MAP[this.props.mode]}`}} aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{color: `${TOGGLE_MODE_NAVBAR_COLOR_MAP[this.props.mode]}`}} to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{color: `${TOGGLE_MODE_NAVBAR_COLOR_MAP[this.props.mode]}`}} to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{color: `${TOGGLE_MODE_NAVBAR_COLOR_MAP[this.props.mode]}`}} to="/general">General</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{color: `${TOGGLE_MODE_NAVBAR_COLOR_MAP[this.props.mode]}`}} to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{color: `${TOGGLE_MODE_NAVBAR_COLOR_MAP[this.props.mode]}`}} to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{color: `${TOGGLE_MODE_NAVBAR_COLOR_MAP[this.props.mode]}`}} to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" style={{color: `${TOGGLE_MODE_NAVBAR_COLOR_MAP[this.props.mode]}`}} to="/technology">Technology</Link></li>
              </ul>
            </div>
            <div className={`form-check form-switch text-${TOGGLE_MODE_NAVBAR_COLOR_MAP[mode]}`}>
              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked" style={{color: `${TOGGLE_MODE_NAVBAR_COLOR_MAP[this.props.mode]}`}}>Enable Dark Mode</label>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
