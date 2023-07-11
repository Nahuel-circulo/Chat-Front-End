import { IAuthState } from '../../interfaces/context'

type TAuthAction = { type: 'signIn' }

export const authReducer = (state: IAuthState, action: TAuthAction): IAuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        isLoggedIn: true,
        user: {
          ...state,
          email: 'nahuel.n.pedroso@gmail.com',
          id: '123123',
          name: 'Nahuel'
        }
      }
    default:
      return state
  }
}
