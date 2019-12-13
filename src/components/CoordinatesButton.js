import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
    
    createArray =(evt) =>{
        this.props.onReceiveCoordinates([evt.clientX, evt.clientY])



    }
    render() {
       
        return (
            <div>

            <button onClick = {this.createArray} >

                Get Coordinates

            </button>
                
            </div>
        )
    }
}
