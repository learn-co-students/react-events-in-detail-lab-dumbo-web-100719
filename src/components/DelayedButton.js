import React from 'react'

export default class DelayedButtons extends React.Component{
    handleDelayButton = (event) => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)}, this.props.delay
        )
    }
    
    render(){
        return(
            <button onClick={this.handleDelayButton}>Press Me</button>
        )
    }
}
