import React from 'react'

function SubHeader (props) {
  let className = 'sub-header'
  className += props.bold ? ' bold' : ''
  return (
    <div className={className} style={props.style}>
      <span className="title">
        {props.headerText}
        {props.subText
          ? <span className="sub-title">{props.subText}</span>
          : ''
        }
      </span>
      {props.children}
      {props.more
        ? <a className="more">更多</a>
        : ''
      }
    </div>
  )
}

SubHeader.defaultProps = {
  style: {}
}

export default SubHeader
