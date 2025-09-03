import React from 'react'
import { Link } from 'react-router-dom'

const IMAGE_BASE = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard({ movie }){
  return (
    <div className="card movie-card h-100">
      {movie.poster_path ? <img src={IMAGE_BASE + movie.poster_path} className="card-img-top" alt={movie.title} /> : null}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text" style={{flex:1}}>{movie.overview?.slice(0,80)}...</p>
        <div className="d-flex justify-content-between align-items-center">
          <small className="text-muted">{movie.release_date}</small>
          <Link to={'/movie/' + movie.id} className="btn btn-sm btn-primary">Details</Link>
        </div>
      </div>
    </div>
  )
}
