import React from 'react'
import { Button } from 'antd'
import PropTypes from "prop-types"

const Link = ({ active, children, onClick }) => (
  <Button
    onClick={onClick}
    type={active ? "primary" : 'dashed'}
    style={{marginLeft: '10px'}}
  >
    {children}
  </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link

