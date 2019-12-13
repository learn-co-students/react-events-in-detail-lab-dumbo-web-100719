// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component {
    logEvent =(evt) => {
        evt.persist(); //because we are access event asynchronously
        setTimeout(() => {
            this.props.onDelayedClick(evt)
            
        }, this.props.delay)
        

    }
    render() {
        return (
            <div>
                <button onClick = {this.logEvent}>
                    DELAY

                </button>
            </div>
        )
    }
}
