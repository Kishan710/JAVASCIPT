import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPopularMovies } from '../store/moviesSlice'
import MovieCard from './MovieCard'
import MovieSearch from './MovieSearch'

export default function MovieList(){
  const dispatch = useDispatch()
  const { list, loading, error } = useSelector(s => s.movies)

  useEffect(() => { dispatch(fetchPopularMovies()) }, [dispatch])

  return (
    <div>
      <MovieSearch />
      {loading && <div className="alert alert-info">Loading...</div>}
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {list.map(m => <div className="col-md-3 mb-3" key={m.id}><MovieCard movie={m} /></div>)}
      </div>
    </div>
  )
}
