import React, { useState } from 'react'

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onAdd(title)
    setTitle('')
  }

  return (
    <form onSubmit={submit} style={{display: 'flex', gap: 8, width: '100%'}}>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Add task..."
        style={{flex: 1, padding: '10px 12px', borderRadius: 10, border: '1px solid #ddd'}}
      />
      <button type="submit" style={{padding: '10px 14px', borderRadius: 10, border: '1px solid #ccc', cursor: 'pointer'}}>Add</button>
    </form>
  )
}
