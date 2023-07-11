import { createContext, useState } from 'react'
import { IChildren } from '../interfaces/base'
import { IAppContext, IUser } from '../interfaces/context'

const DEFAULT_CONTEXT_VALUES:IAppContext = {
  userLogged: {
    id: '',
    email: '',
    name: ''
  },
  setUserLogged: () => {}
}

export const AppContext = createContext<IAppContext>(DEFAULT_CONTEXT_VALUES)

export default function AppProvider ({ children }: IChildren) {
  const [userLogged, setUserLogged] = useState<IUser>(DEFAULT_CONTEXT_VALUES.userLogged)

  return (
    <AppContext.Provider value={{ userLogged, setUserLogged }}>
      {children}
    </AppContext.Provider>
  )
}
