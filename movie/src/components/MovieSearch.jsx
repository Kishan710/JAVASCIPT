import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchMovies } from '../store/moviesSlice'

export default function MovieSearch(){
  const [q, setQ] = useState('')
  const dispatch = useDispatch()
  const results = useSelector(s => s.movies.queryResults)

  const doSearch = (e) => {
    e.preventDefault()
    if (!q.trim()) return
    dispatch(searchMovies(q))
  }

  return (
    <div className="mb-3">
      <form className="d-flex" onSubmit={doSearch}>
        <input className="form-control me-2" placeholder="Search movies..." value={q} onChange={e=>setQ(e.target.value)} />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      {results && results.length>0 && (
        <div className="row mt-3">
          {results.map(r=>(
            <div className="col-md-3 mb-3" key={r.id}><div className="card p-2"><a href={'/movie/'+r.id}>{r.title}</a></div></div>
          ))}
        </div>
      )}
    </div>
  )
}
