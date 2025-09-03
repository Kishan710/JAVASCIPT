import { createSlice } from '@reduxjs/toolkit'

const user = JSON.parse(localStorage.getItem('user') || 'null')
const slice = createSlice({
  name: 'auth',
  initialState: { user, loading: false },
  reducers: {
    loginStart(state){ state.loading = true },
    loginSuccess(state, action){ state.loading = false; state.user = action.payload },
    logout(state){ state.user = null }
  }
})

export const { loginStart, loginSuccess, logout } = slice.actions
export default slice.reducer

export const login = (username) => async dispatch => {
  dispatch(loginStart())
  // mock delay
  await new Promise(r => setTimeout(r, 500))
  const u = { name: username }
  localStorage.setItem('user', JSON.stringify(u))
  dispatch(loginSuccess(u))
}
export const doLogout = () => dispatch => {
  localStorage.removeItem('user')
  dispatch(logout())
}
