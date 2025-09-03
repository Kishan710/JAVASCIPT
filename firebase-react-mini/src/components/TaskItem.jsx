import React, { useState } from 'react'

export default function TaskItem({ task, onToggle, onRename, onRemove }) {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState(task.title)

  const save = () => {
    const v = value.trim()
    if (v && v !== task.title) onRename(v)
    setEditing(false)
  }

  return (
    <li style={{display: 'flex', alignItems: 'center', gap: 8, padding: 10, border: '1px solid #eee', borderRadius: 12}}>
      <input type="checkbox" checked={!!task.done} onChange={onToggle} />
      {editing ? (
        <input
          value={value}
          onChange={e => setValue(e.target.value)}
          onBlur={save}
          onKeyDown={e => e.key === 'Enter' && save()}
          autoFocus
          style={{flex: 1, padding: '8px 10px', borderRadius: 8, border: '1px solid #ddd'}}
        />
      ) : (
        <span
          onDoubleClick={() => setEditing(true)}
          style={{flex: 1, textDecoration: task.done ? 'line-through' : 'none'}}
        >
          {task.title}
        </span>
      )}
      <button onClick={() => setEditing(v => !v)} style={{padding: '6px 10px', borderRadius: 8, border: '1px solid #ddd', cursor: 'pointer'}}>
        {editing ? 'Save' : 'Edit'}
      </button>
      <button onClick={onRemove} style={{padding: '6px 10px', borderRadius: 8, border: '1px solid #f3c', cursor: 'pointer'}}>Delete</button>
    </li>
  )
}
