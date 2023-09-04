import React, { Component } from 'react'
import { TOGGLE_MODE_BG_COLOR_MAP, TOGGLE_MODE_COLOR_MAP } from '../utils/constants';

export class Navbar extends Component {
  render() {
    const { mode, toggleMode } = this.props || {};
    return (
      <div>
        <nav className={`navbar navbar-expand-lg data-bs-theme=${TOGGLE_MODE_BG_COLOR_MAP[mode]} bg-${TOGGLE_MODE_BG_COLOR_MAP[mode]}`}>
          <div className="container-fluid">
            <a className="navbar-brand" style={{ color: `${TOGGLE_MODE_COLOR_MAP[mode]}` }} href="/">NewsMonkey</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" style={{ color: `${TOGGLE_MODE_COLOR_MAP[mode]}` }} aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" style={{ color: `${TOGGLE_MODE_COLOR_MAP[mode]}` }} href="/about">About</a>
                </li>
              </ul>
            </div>
            <div class={`form-check form-switch text-${TOGGLE_MODE_COLOR_MAP[mode]}`}>
              <input class="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckChecked" />
                <label class="form-check-label" for="flexSwitchCheckChecked">Enable Dark Mode</label>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
