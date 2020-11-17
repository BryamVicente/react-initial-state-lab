// your ImageSlider code here!
import React from 'react'

class ImageSlider extends React.Component {

    state = {currentSlideIndex: 0}

    render(){
        console.log(this.state.currentSlideIndex)
    return <p>I am on slide {this.state.currentSlideIndex}</p>

    }
}

export default ImageSlider;