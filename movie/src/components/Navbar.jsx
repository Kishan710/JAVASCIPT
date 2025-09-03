import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { doLogout } from '../store/authSlice'

export default function Navbar(){
  const user = useSelector(s => s.auth.user)
  const dispatch = useDispatch()
  const nav = useNavigate()

  const logout = () => { dispatch(doLogout()); nav('/') }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white mb-4 shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">MovieLib</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/">Popular</Link></li>
          </ul>
          <div className="d-flex align-items-center">
            <Link className="btn btn-outline-secondary me-2" to="/profile">Profile</Link>
            {user ? (
              <button className="btn btn-danger" onClick={logout}>Sign out</button>
            ) : (
              <Link className="btn btn-primary" to="/login">Sign in</Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
