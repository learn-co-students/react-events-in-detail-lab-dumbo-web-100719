// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    
    callback = (event) => {
        let stored = event
        setTimeout(this.props.onDelayedClick(stored), this.props.delay)
    }
    
    
    
    render() {
        return (
            <button
            onClick= {(event) => this.callback(event)}
            >
                Click Me with a Delay!
            </button>
        )
    }
}
