import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <footer className="todo-list-footer">
    <span>Show:</span>
    <FilterLink filterType="SHOW_ALL">
      All
    </FilterLink>
    <FilterLink filterType="SHOW_ACTIVE">
      Active
    </FilterLink>
    <FilterLink filterType="SHOW_COMPLETED">
      Completed
    </FilterLink>
  </footer>
)

export default Footer
