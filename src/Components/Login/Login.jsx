import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.scss'

const Login = () => {
  const nav = useNavigate()
  const [data, setData] = useState({ email: '', password: '' })

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleLogin = (e) => {
    e.preventDefault()
    localStorage.setItem('taskData', JSON.stringify({ email: data.email }))
    nav('/dash')
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('taskData'))
    if (data) {
      nav('/dash')
    }
  }, [])

  return (
    <>
      <section className="login_main">
        <form>
          <div className="box">
            <h1>Login Form</h1>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              onChange={onChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={onChange}
              required
            />
            <button type="submit" className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
