import React, { Component } from 'react';
import logo from '../../assets/mic.svg';
import '../css/Mic.css';

class Mic extends Component {
  render() {
    return (
      <div className="MicIcon">
        <img src={logo} className="Mic-logo" alt="logo" />
        <h2>Click on the Microphone Icon  for your speech</h2>
      </div>
    )
  }
}
export default Mic;
