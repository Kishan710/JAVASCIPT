import React from 'react'
import { useSelector } from 'react-redux'

export default function Profile(){
  const user = useSelector(s=>s.auth.user)
  return (
    <div className="card p-4">
      <h3>Profile</h3>
      <p><strong>Name:</strong> {user?.name}</p>
      <p>This is a simple profile page. Save favorite movies or watchlist here (not implemented).</p>
    </div>
  )
}
