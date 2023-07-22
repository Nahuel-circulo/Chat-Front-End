import { createContext, useReducer } from 'react'
import { IChildren } from '../interfaces/base'
import { IAuthState, IContextProps, IUser } from '../interfaces/contextInterfaces'
import { authReducer } from './Auth/authReducer'
import useLocalStorage from '../hooks/useLocalStorage'

const initialState: IAuthState = {
  isLoggedIn: false,
  user: undefined
}

export const AppContext = createContext({} as IContextProps)

export default function AppProvider ({ children }: IChildren) {
  const [user, setUser] = useLocalStorage<IUser>('user', {} as IUser)

  const [authState, authDispatch] = useReducer(authReducer, {
    isLoggedIn: user.id !== undefined,
    user
  })

  const signIn = (user:IUser) => {
    authDispatch({ type: 'signIn', payload: user })
    setUser(user)
  }
  const logout = () => {
    authDispatch({ type: 'logout' })
    setUser({})
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
