import { createSlice } from '@reduxjs/toolkit'
import * as tmdb from '../services/tmdb'

const initialState = {
  list: [],
  loading: false,
  error: null,
  page: 1,
  totalPages: 1,
  queryResults: []
}

const slice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    start(state){ state.loading = true; state.error = null },
    finish(state){ state.loading = false },
    setList(state, action){ state.list = action.payload.results; state.page = action.payload.page; state.totalPages = action.payload.total_pages },
    setError(state, action){ state.error = action.payload },
    setQueryResults(state, action){ state.queryResults = action.payload.results || [] }
  }
})

export const { start, finish, setList, setError, setQueryResults } = slice.actions
export default slice.reducer

export const fetchPopularMovies = (page=1) => async dispatch => {
  try{
    dispatch(start())
    const data = await tmdb.fetchPopular(page)
    dispatch(setList(data))
  }catch(err){
    dispatch(setError(err.message || 'Failed to fetch'))
  }finally{ dispatch(finish()) }
}

export const searchMovies = (query) => async dispatch => {
  try{
    dispatch(start())
    const data = await tmdb.searchMovies(query)
    dispatch(setQueryResults(data))
  }catch(err){
    dispatch(setError(err.message || 'Search failed'))
  }finally{ dispatch(finish()) }
}
