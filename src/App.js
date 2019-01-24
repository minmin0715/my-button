import React, { Component } from 'react';
import './App.scss';
import Button from './component/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button isBusinessTheme={true} disabled={true}></Button>
        <Button isConsumerTheme={true}></Button>
      </div>
    );
  }
}

export default App;
