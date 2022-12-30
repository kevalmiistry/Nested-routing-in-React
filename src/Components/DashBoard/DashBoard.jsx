import React, { useEffect, useState } from 'react'
import './DashBoard.scss'

const DashBoard = () => {
  const [email, setEmail] = useState('')
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('taskData'))
    if (!data) {
      nav('/account')
    } else {
      setEmail(data.email)
    }
  }, [])
  return <div>Hello, {email}</div>
}

export default DashBoard
