import React, { Component } from 'react';
import Mic from './Mic.js';
import '../css/Main.css';

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Main-header">
        <Mic />
        </div>
      </div>
    );
  }
}

export default Main;
