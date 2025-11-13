// src/pages/SignIn.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    localStorage.setItem('user', name)
    navigate('/dashboard')
  }

  return (
    <div className="container d-flex flex-column align-items-center justify-content-center" style={{ height: '80vh' }}>
      <h2 className="mb-4 fw-bold">Welcome to LearnScape</h2>
      <form className="col-md-4" onSubmit={handleSignIn}>
        <input type="text" className="form-control mb-3" placeholder="Enter your name" required onChange={(e) => setName(e.target.value)} />
        <button className="btn btn-primary w-100">Sign In</button>
      </form>
    </div>
  )
}

export default SignIn
