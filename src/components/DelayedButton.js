import React from 'react'
// Code DelayedButton Component Here

export default class DelayedButton extends React.Component{
    
      handleOnClick = event => {
        event.persist()
       setTimeout(() => {
           this.props.onDelayedClick(event), this.props.delay
       })
    }
    render(){
        return(<button onClick={this.handleOnClick}>Delayed</button>)
    }
}