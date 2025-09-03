import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'

export default function Login(){
  const [name, setName] = useState('')
  const dispatch = useDispatch()
  const loading = useSelector(s=>s.auth.loading)
  const nav = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    if (!name.trim()) return
    await dispatch(login(name.trim()))
    nav('/profile')
  }

  return (
    <div className="card p-4" style={{maxWidth:480, margin:'0 auto'}}>
      <h3>Sign in</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input className="form-control" value={name} onChange={e=>setName(e.target.value)} />
        </div>
        <button className="btn btn-primary" disabled={loading}>{loading ? 'Signing...' : 'Sign in'}</button>
      </form>
    </div>
  )
}
