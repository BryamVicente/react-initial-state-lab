// your Bomb code here!
import React, { Component } from 'react'

class Bomb extends React.Component {
    // constructor(props) {
    //     super()
    //     this.state = {
    //       secondsLeft: props.initialCount
    //     }
    // }

    state = {secondsLeft: this.props.initialCount}

    render(){
        // console.log(this.state.secondsLeft)
    
        return (
            <div className="test"> 
            {
                (this.state.secondsLeft !== 0 )
                ?<p>{this.state.secondsLeft} seconds left before I go boom!</p>
                : <p>Boom!</p>
            }
            </div>
        )
        
        
        
        
        // <p>{this.state.secondsLeft === 0 ? "Boom!" : {this.state.secondsLeft} "seconds left before I go boom!"} </p>

    }
}

export default Bomb;