export const types = {
  LOGIN: {
    REQUEST: 'LOGIN.REQUEST',
    SUCCESS: 'LOGIN.SUCCESS',
    FAILURE: 'LOGIN.FAILURE',
  },
  SIGNUP: {
    REQUEST: 'SIGNUP.REQUEST',
  },
  LOGOUT: {
    REQUEST: 'LOGOUT.REQUEST',
    SUCCESS: 'LOGOUT.SUCCESS',
    FAILURE: 'LOGOUT.FAILURE',
  },
  LOAD_USER_DATA: 'LOAD_USER_DATA',
}

export const login = (email, password) => ({
  type: types.LOGIN.REQUEST,
  email,
  password
})

export const signup = (email, password) => ({
  type: types.SIGNUP.REQUEST,
  email,
  password
})

export const loadUserData = (email, userId) => ({
  type: types.LOAD_USER_DATA,
  email,
  userId,
})

export const loginSuccess = () => ({
    type: types.LOGIN.SUCCESS,
})

export const loginFailure = error => ({
  type: types.LOGIN.FAILURE,
  error
})

export const logout = () => ({
  type: types.LOGOUT.REQUEST
})

export const logoutSuccess = () => ({
  type: types.LOGOUT.SUCCESS
})

export const logoutFailure = error => ({
  type: types.LOGOUT.FAILURE,
  error
})

