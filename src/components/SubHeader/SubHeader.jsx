import React from 'react'

function SubHeader (props) {
  return (
    <div className="sub-header">
      <span className="title">
        {props.headerText}
        {
          props.subText ? <span className="sub-title">{props.subText}</span> : ''
        }
      </span>
      {
        props.children
      }
      {
        props.more ? <a className="more">更多</a> : ''
      }
    </div>
  )
}

export default SubHeader
