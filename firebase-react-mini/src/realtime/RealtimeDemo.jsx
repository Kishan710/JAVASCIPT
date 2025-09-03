import React, { useEffect, useState } from 'react'
import { rtdb } from '../firebase'
import { onValue, ref, runTransaction } from 'firebase/database'

export default function RealtimeDemo() {
  const [count, setCount] = useState(0)
  const counterRef = ref(rtdb, 'demo/counter')

  useEffect(() => {
    const unsub = onValue(counterRef, (snap) => {
      const v = snap.val()
      setCount(typeof v === 'number' ? v : 0)
    })
    return () => unsub()
  }, [])

  const increment = async () => {
    await runTransaction(counterRef, (current) => (typeof current === 'number' ? current + 1 : 1))
  }

  return (
    <div>
      <h2>Realtime Database Counter</h2>
      <p style={{marginTop: 0}}>Shared counter across all open clients.</p>
      <button onClick={increment} style={{padding: '10px 14px', borderRadius: 10, border: '1px solid #ccc', cursor: 'pointer'}}>Increment</button>
      <div style={{display: 'inline-block', marginLeft: 12, padding: '8px 12px', borderRadius: 10, border: '1px solid #eee'}}>
        Count: {count}
      </div>
    </div>
  )
}
