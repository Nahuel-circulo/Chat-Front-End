import { FormEvent, useContext, useState } from 'react'
import { IMessage, IUser } from '../interfaces/contextInterfaces'
import { AppContext } from '../context/App.context'

const useMessages = (initialValue: IMessage[] = []):[user:IUser, messages:IMessage[], handleSubmit:(e:FormEvent<HTMLFormElement>)=>void ] => {
  const { authState } = useContext(AppContext)

  const { user } = authState

  const [messages, setMessages] = useState<IMessage[]>(
    initialValue
  )

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (e.currentTarget.message.value.trim() !== '') {
      setMessages([...messages,
        {
          message: e.currentTarget.message.value,
          user: user as IUser,
          date: new Date()
        }
      ])
      e.currentTarget.message.value = ''
    }
  }

  return [
    user as IUser, messages, handleSubmit
  ]
}
export default useMessages
