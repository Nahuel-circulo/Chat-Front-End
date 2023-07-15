import { IAuthState, IUser } from '../../interfaces/contextInterfaces'

type TAuthAction =
| { type: 'signIn', payload: IUser }
| { type: 'logout' }

export const authReducer = (state: IAuthState, action: TAuthAction): IAuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        user: {
          id: action.payload.id,
          username: action.payload.username
        }
      }
    case 'logout':
      return {
        ...state,
        isLoggedIn: false,
        user: undefined
      }
    default:
      return state
  }
}
