// Code DelayedButton Component Here
import React, { Component } from 'react';

class DelayedButton extends Component {

    delayButtonFunction = (event) =>{
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)
            
        }, this.props.delay)
    }

    render() {
        return (
            <div>
                <button onClick={this.delayButtonFunction}>Delayed Button</button>
            </div>
        );
    }
}

export default DelayedButton;