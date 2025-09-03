import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchMovieDetails } from '../services/tmdb'

export default function MovieDetails(){
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetchMovieDetails(id).then(d => { setMovie(d); setLoading(false) }).catch(e => { setError(e.message); setLoading(false) })
  }, [id])

  if (loading) return <div className="alert alert-info">Loading details...</div>
  if (error) return <div className="alert alert-danger">{error}</div>
  if (!movie) return null

  return (
    <div className="card">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={'https://image.tmdb.org/t/p/w500' + movie.poster_path} className="img-fluid rounded-start" alt={movie.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3>{movie.title}</h3>
            <p><strong>Release:</strong> {movie.release_date}</p>
            <p><strong>Genres:</strong> {movie.genres?.map(g=>g.name).join(', ')}</p>
            <p>{movie.overview}</p>
            <h5>Cast</h5>
            <div style={{display:'flex', gap:8, overflowX:'auto'}}>
              {movie.credits?.cast?.slice(0,8).map(c=> (
                <div key={c.cast_id} style={{minWidth:100}}>
                  <img src={'https://image.tmdb.org/t/p/w200' + c.profile_path} alt={c.name} style={{width:'100%', borderRadius:6}} />
                  <small>{c.name}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
