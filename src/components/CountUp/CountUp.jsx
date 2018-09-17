import React, { Component } from 'react'
import './countUp.scss'

class CountUp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startValue: this.props.startValue || 0,
      endValue: this.props.endValue
    }
  }
  componentDidMount () {
    console.log(this.props)
  }
  render () {
    return (
      <div className="count-up">
        <h2>
          <a id={this.props.id}>{this.state.startValue}</a>
        </h2>
        <p>{this.props.infoText}</p>
      </div>
    )
  }
}

export default CountUp

