import React, { Component } from 'react'
import './countUp.less'
import CountUp from 'countup.js'

class Countup extends Component {
  constructor (props) {
    super(props)
    this.state = {
      startValue: this.props.startValue || 0,
      endValue: Number(this.props.endValue),
      decimal: this.props.decimal || 0, // 保留几位小数
      duration: this.props.duration || 2
    }
  }
  componentDidMount () {
    let demo = {}
    demo = new CountUp(this.props.id, this.state.startValue, this.state.endValue, this.state.decimal, this.setState.duration)
    if (!demo.error) {
      demo.start()
    }
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

export default Countup
