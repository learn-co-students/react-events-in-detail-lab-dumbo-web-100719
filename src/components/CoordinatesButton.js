// Code CoordinatesButton Component Here
import React, { Component } from 'react'



export default class CoordinatesButton extends Component {

    createArray = (event) => {
        console.log(event)
        let newArr = []
        newArr.push(event.clientX, event.clientY)
        return this.props.onReceiveCoordinates(newArr)
    }
    



    render() {

        return (
            <button
            onClick= {(event) => this.createArray(event)}
            >
                Click Me!
            </button>
        )
    }
}
