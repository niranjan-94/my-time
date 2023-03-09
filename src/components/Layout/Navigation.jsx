/* eslint-disable */
import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="active">
            Today
          </NavLink>
        </li>
        <li>
          <NavLink to="/calendar" activeClassName="active">
            Calendar
          </NavLink>
        </li>
        <li>
          <NavLink to="/reports" activeClassName="active">
            Reports
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName="active">
            Settings
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation