import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const BASE = import.meta.env.VITE_TMDB_API_URL || 'https://api.themoviedb.org/3'

const tmdb = axios.create({
  baseURL: BASE,
  params: { api_key: API_KEY, language: 'en-US' }
})

export const fetchPopular = (page = 1) => tmdb.get('/movie/popular', { params: { page } }).then(r => r.data)
export const searchMovies = (query, page = 1) => tmdb.get('/search/movie', { params: { query, page } }).then(r => r.data)
export const fetchMovieDetails = (id) => tmdb.get(`/movie/${id}`, { params: { append_to_response: 'credits' } }).then(r => r.data)
