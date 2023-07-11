import { createContext, useReducer } from 'react'
import { IChildren } from '../interfaces/base'
import { IAuthState, IContextProps } from '../interfaces/context'
import { authReducer } from './Auth/authReducer'

const initialState: IAuthState = {
  isLoggedIn: false,
  user: undefined
}

export const AppContext = createContext({} as IContextProps)

export default function AppProvider ({ children }: IChildren) {
  const [state, dispatch] = useReducer(authReducer, initialState)

  const signIn = () => {
    dispatch({ type: 'signIn' })
  }
  return (
    <AppContext.Provider value={{
      authState: state,
      signIn
    }}
    >
      {children}
    </AppContext.Provider>
  )
}
