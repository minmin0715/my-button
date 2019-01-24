import React, { Component } from 'react';
import '../assets/styles/_button.scss';

class Button extends Component {
  render() {
    return (
        //  Uncomment the code to display different size.
        //  Need to hover and click the button to show different styles for each state.
        <div className="button-section">
            {this.props.isBusinessTheme && 
                <div className="section">
                    <h1>This is the Business Theme Button.</h1>
                    <div className="button-row">
                        <p>Primary Button</p>
                        <button className="button-business-primary lg"><span className="button-text">Primary</span></button>
                        {/* <button className="button-business-primary md"><span className="button-text">Primary</span></button>
                        <button className="button-business-primary sm"><span className="button-text">Primary</span></button> */}
                    </div>
                    <div className="button-row">
                        <p>Primary Button Disabled</p>
                        <button disabled={true} className="button-business-primary lg"><span className="button-text">Primary</span></button>
                        {/* <button disabled={true} className="button-business-primary md"><span className="button-text">Primary</span></button>
                        <button disabled={true} className="button-business-primary sm"><span className="button-text">Primary</span></button> */}
                    </div>
                    <div className="button-row">
                        <p>Secondary Button</p>
                        <button className="button-business-sec lg"><span className="button-text">Secondary</span></button>
                        {/* <button className="button-business-sec md"><span className="button-text">Secondary</span></button>
                        <button className="button-business-sec sm"><span className="button-text">Secondary</span></button> */}
                    </div>
                    <div className="button-row">
                        <p>Secondary Button Disabled</p>
                        <button disabled={true} className="button-business-sec lg"><span className="button-text">Secondary</span></button>
                        {/* <button disabled={true} className="button-business-sec md"><span className="button-text">Secondary</span></button>
                        <button disabled={true} className="button-business-sec sm"><span className="button-text">Secondary</span></button> */}
                    </div>
                </div>
            }

            {this.props.isConsumerTheme && 
                <div className="section">
                    <h1>This is the Consumer Theme Button.</h1>
                    <div className="button-row">
                        <p>Primary Button</p>
                        <button className="button-consumer-primary"><span className="button-text">Primary</span></button>
                    </div>
                    
                    <div className="button-row">
                        <p>Primary Button Disabled</p>
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
            }
        </div>
    );
  }
}

export default Button;
