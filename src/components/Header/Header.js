import React from 'react'
import { NavLink } from 'react-router-dom'

import { header, nav, active } from './Header.css'

const Header = () => (
  <div className={header}>
    <nav className={nav}>
      <ul>
        <li>
          <NavLink exact activeClassName={active} to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink activeClassName={active} to='/counter'>Counter</NavLink>
        </li>
        <li>
          <NavLink activeClassName={active} to='/todos'>Todos</NavLink>
        </li>
      </ul>
    </nav>
  </div>
)

export default Header
