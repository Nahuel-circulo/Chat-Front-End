export interface IUser {
  id: string
  username: string
}
export interface IAuthState {
  isLoggedIn: boolean
  user?: IUser
}

export interface IContextProps{
  authState: IAuthState
  signIn: (user: IUser) => void
  logout: () => void
}
