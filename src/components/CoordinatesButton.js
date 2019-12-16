// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component{
    handleOnClick = (event) => {
        const newArray = [event.clientX, event.clientY]
        this.props.onReceiveCoordinates(newArray)
    }


    render(){
        return(
         <button onClick={this.handleOnClick}></button>
        )
    }
   
    
}


/*How this all works:
In the parent(index.js) file props are passed down 
to the child component CoordinatesButton.js. The props that were sent to the
child component CoordinatesButton was a function called "onRecieveCoordinates"
This function accepts a parameter , the placeholder name is "mouseCoordinates "
which hints what we should be passing to this function(obviously mouse coordinates to
be logged to the console). On click of the button inside of the Coordinates a function
will render that creates a new array which holds both event.clientX' and event.clientY
then passes it to our props function "this.props.onRecieveCoordinates". The function then
does its job and renders the parameters passed in which are event.clients and logs our
coordinates to the console!.



*/