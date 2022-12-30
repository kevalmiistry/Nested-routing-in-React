import React, { useEffect, useState } from 'react'
import {
  useNavigate,
  Outlet,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom'
import Nav from '../Nav/Nav'
import DashBoard from '../DashBoard/DashBoard'
import './Main.scss'
import About from '../About/About'
import Contact from '../Contact/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Main = () => {
  const location = useLocation()
  const nav = useNavigate()
  const [email, setEmail] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('taskData'))
    if (!data) {
      nav('/account')
    } else {
      setEmail(data.email)
    }
    const loc = location.pathname
    if (loc === '/') {
      nav('/dash')
    }
  }, [])

  const handleClick = () => {
    setMenuOpen((prev) => !prev)
  }
  const handleLogOut = () => {
    localStorage.removeItem('taskData')
    nav('/account')
  }

  const btnStyles = {
    color: menuOpen ? '#000' : '#fff',
    borderColor: menuOpen ? '#000' : '#fff',
  }

  const menuStyles = {
    transform: menuOpen ? 'translateX(0%)' : 'translateX(-250px)',
  }

  return (
    <>
      <section className="main_container">
        <div style={menuStyles} className="nav">
          <Nav />
        </div>
        <div className="head">
          <button
            style={btnStyles}
            className="btn menu_btn"
            onClick={handleClick}
          >
            {menuOpen ? (
              <FontAwesomeIcon icon={faXmark} />
            ) : (
              <FontAwesomeIcon icon={faBars} />
            )}
          </button>
          <div onClick={handleLogOut} className="p_wrapper">
            <p>{email[0]?.toUpperCase()}</p>
          </div>
        </div>
        <div className="body">
          {/* <Routes>
            <Route path="/dash" element={<DashBoard email={email} />} />
            <Route path="/about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Routes> */}
          <Outlet />
        </div>
      </section>
    </>
  )
}

export default Main
