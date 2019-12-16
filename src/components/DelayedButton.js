import React from 'react'
// Code DelayedButton Component Here

export default class DelayedButton extends React.Component{
    
      handleOnClick = event => {
        event.persist()
       setTimeout(() => {
           this.props.onDelayedClick(event)},this.props.delay
         )
       }

    //    exImg =() => {
    //     let bananaImg = document.getElementById("img")
    //         if (bananaImg.hidden) {
                
    //         bananaImg.hidden = !bananaImg.hidden
       
        
    //         }



    //    exampleFunc = (event) => {
    //     let newArray = [event.clientX, event.clientY]

    //        if (event.clientX < 80){
    //            console.log(this.props.render(`Your click on client.X was a number below 80: ${event.clientX } `))   
    //         } else if(event.clientX > 90) {
    //          setTimeout(() => {
    //             this.exImg()
                
    //         }, 1000)
    //        } else {
    //         return this.props.render(newArray)
    //        }
    //     }

       
    render(){
        return(
        <div>
            <button onClick={this.handleOnClick}>Delayed</button>
            {/* <button onClick={this.exampleFunc}>Test</button> */}
            {/* <br></br>
            <img id="img" src="https://media1.tenor.com/images/0ec08f9a88c8058124e459d044c26faf/tenor.gif?itemid=9144505" hidden alt="test" /> */}
        </div>

        )
    }
}

/*The parent index.js passed down a prop(function) and a prop (delay attr) which is a number.
We creatd a button in the child component DelayedButton that onClick renders a function called
handleOnClick which accepts the event as a parameter in it's arrow function renders a setTimeout
function which takes a callback function which is our passed down function "onDelayedClick" as well as 
a delay time which was also passed down as a prop called "delay"

*/
