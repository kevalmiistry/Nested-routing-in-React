import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
  const styles = {
    textDecoration: 'none',
    color: '#000',
  }
  return (
    <>
      <nav className="nav_main">
        <ul>
          <NavLink to="/dash" style={styles}>
            <li>Dashboard</li>
          </NavLink>
          <NavLink to="/about" style={styles}>
            <li>About</li>
          </NavLink>
          <NavLink to="/contact" style={styles}>
            <li>Contact</li>
          </NavLink>
        </ul>
      </nav>
    </>
  )
}

export default Nav
