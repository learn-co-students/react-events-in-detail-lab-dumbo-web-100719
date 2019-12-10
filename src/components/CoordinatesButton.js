// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component{
    

    handleClick = (event) => {
        const buttonArray = []
        buttonArray.push(event.clientX, event.clientY)
        return this.props.onReceiveCoordinates(buttonArray)
    }



    
    render(){
         return(
             <button
                onClick={this.handleClick}
             >
                 Click me!
             </button>
         )
    }
}