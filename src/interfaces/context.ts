import { Dispatch, SetStateAction } from 'react'

export interface IUser {
  id: string;
  name: string;
  email: string;
}
export interface IAppContext{
  userLogged: IUser;
  setUserLogged: Dispatch<SetStateAction<IUser>>
}
