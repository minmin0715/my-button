import React, { Component } from 'react';
import '../assets/styles/_button.scss';

class Button extends Component {
  render() {
    return (
        
      <div className="button-section">
        <h1>This is the Business Theme Button.</h1>
        <button className="button-business-primary lg"><span className="button-text">Primary</span></button>
        <div className="button-row">
            <p>Primary Button</p>
            <button className="button-business-primary"><span className="button-text">Primary</span></button>
        </div>
        <div className="button-row">
            <p>Primary Button <br/>Disabled</p>
            <button disabled={true} className="button-business-primary"><span className="button-text">Primary Primary Primary</span></button>
        </div>
        <div className="button-row">
            <p>Secondary Button</p>
            <button className="button-business-sec"><span className="button-text">Secondary</span></button>
        </div>
        <div className="button-row">
            <p>Secondary Button <br/>Disabled</p>
            <button disabled={true} className="button-business-sec"><span className="button-text">Secondary</span></button>
        </div>
        
        <h1>This is the Consumer Theme Button.</h1>
        <div className="button-row">
            <p>Primary Button</p>
            <button className="button-consumer-primary"><span className="button-text">Primary</span></button>
        </div>
         
        <div className="button-row">
            <p>Primary Button <br/>Disabled</p>
            <button disabled={true} className="button-consumer-primary"><span className="button-text">Primary</span></button>
        </div>
       
        <div className="button-row">
            <p>Secondary Button</p>
            <button className="button-consumer-sec"><span className="button-text">Secondary</span></button>
        </div>
        
        <div className="button-row">
            <p>Secondary Button <br/>Disabled</p>
            <button disabled={true} className="button-consumer-sec"><span className="button-text">Secondary</span></button>
        </div>
      </div>
    );
  }
}

export default Button;
