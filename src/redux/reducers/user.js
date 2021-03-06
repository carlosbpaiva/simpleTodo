import { types } from './user.actions'

const initialState = {
  loading: false,
  loggedIn: false,
  userId: null,
  email: null,
}

export default function userReducer (state = initialState, action = {}) {
  switch (action.type) {
    case types.LOGIN.REQUEST:
    case types.LOGOUT.REQUEST:
      return {
        ...state,
        loading: true,
      }
    case types.LOAD_USER_DATA:
      return {
        ...state,
        userId: action.userId,
        error: '',
      }
    case types.LOGIN.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        email: action.email,
        userId: action.userId,
       }
    case types.LOGIN.FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      }
    case types.LOGOUT.SUCCESS:
      return {
        ...state,
        loading: false,
        loggedIn: false
      }
    case types.LOGOUT.FAILURE:
      return {
        ...state,
        loading: false
      }
    default:
      return state
  }
}
