import React, { useEffect, useMemo, useState } from 'react'
import { db } from './firebase'
import {
  addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, updateDoc
} from 'firebase/firestore'
import TaskItem from './components/TaskItem'
import TaskForm from './components/TaskForm'
import RealtimeDemo from './realtime/RealtimeDemo'

export default function App() {
  const [tasks, setTasks] = useState([])
  const [filter, setFilter] = useState('all') // all | open | done

  // Subscribe realtime to Firestore
  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('createdAt', 'desc'))
    const unsub = onSnapshot(q, (snap) => {
      const rows = snap.docs.map(d => ({ id: d.id, ...d.data() }))
      setTasks(rows)
    })
    return () => unsub()
  }, [])

  const filtered = useMemo(() => {
    if (filter === 'open') return tasks.filter(t => !t.done)
    if (filter === 'done') return tasks.filter(t => t.done)
    return tasks
  }, [tasks, filter])

  const addTask = async (title) => {
    if (!title.trim()) return
    await addDoc(collection(db, 'tasks'), {
      title: title.trim(),
      done: false,
      createdAt: serverTimestamp()
    })
  }

  const toggleTask = async (id, done) => {
    await updateDoc(doc(db, 'tasks', id), { done: !done })
  }

  const renameTask = async (id, title) => {
    await updateDoc(doc(db, 'tasks', id), { title })
  }

  const removeTask = async (id) => {
    await deleteDoc(doc(db, 'tasks', id))
  }

  return (
    <div style={{maxWidth: 720, margin: '40px auto', padding: 16, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto'}}>
      <h1 style={{marginBottom: 8}}>✅ Firebase + React Mini Project</h1>
      <p style={{marginTop: 0, opacity: .8}}>Firestore CRUD + Realtime Database demo</p>

      <section style={{display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16}}>
        <TaskForm onAdd={addTask} />
        <select value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="open">Open</option>
          <option value="done">Done</option>
        </select>
      </section>

      <ul style={{listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 8}}>
        {filtered.map(t => (
          <TaskItem
            key={t.id}
            task={t}
            onToggle={() => toggleTask(t.id, t.done)}
            onRename={(title) => renameTask(t.id, title)}
            onRemove={() => removeTask(t.id)}
          />
        ))}
        {filtered.length === 0 && <li style={{opacity: .7}}>No tasks yet — add one!</li>}
      </ul>

      <hr style={{margin: '24px 0'}} />

      <RealtimeDemo />
    </div>
  )
}
