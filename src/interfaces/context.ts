export interface IUser {
  id: string
  name: string
  email: string
}
export interface IAuthState {
  isLoggedIn: boolean
  user?: IUser
}

export interface IContextProps{
  authState: IAuthState
  signIn: ()=>void
}
