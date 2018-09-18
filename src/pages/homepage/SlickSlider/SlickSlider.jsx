import React, { Component } from 'react'
import { Carousel } from 'antd'

class Swipper extends Component {
  componentDidMount () {
    // console.log(this.props)
  }
  afterChange (e) {
    // console.log(e)
  }
  render () {
    return (
      <Carousel
        className="slick-slider"
        style={{height: 250}}
        autoplay="true"
        afterChange={this.afterChange.bind(this)}
      >
        {
          this.props.sliderImgs.map((item, index) =>
            <div key={index}>
              <img src={item} alt={index}/>
            </div>
          )
        }
      </Carousel>
    )
  }
}

export default Swipper
