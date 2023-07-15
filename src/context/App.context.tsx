import { createContext, useReducer } from 'react'
import { IChildren } from '../interfaces/base'
import { IAuthState, IContextProps, IUser } from '../interfaces/contextInterfaces'
import { authReducer } from './Auth/authReducer'

const initialState: IAuthState = {
  isLoggedIn: false,
  user: undefined
}

export const AppContext = createContext({} as IContextProps)

export default function AppProvider ({ children }: IChildren) {
  const [authState, authDispatch] = useReducer(authReducer, initialState)

  const signIn = (user:IUser) => {
    authDispatch({ type: 'signIn', payload: user })
  }
  const logout = () => {
    authDispatch({ type: 'logout' })
  }

  return (
    <AppContext.Provider value={{
      authState,
      signIn,
      logout
    }}
    >
      {children}
    </AppContext.Provider>
  )
}
