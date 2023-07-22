import { FormEvent, useContext, useState } from 'react'
import { AppContext } from '../context/App.context'
import { v4 as uuidv4 } from 'uuid'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from '../hooks/useLocalStorage'
import { IUser } from '../interfaces/contextInterfaces'

const LoginForm = () => {
  const { signIn } = useContext(AppContext)
  const [username, setUsername] = useState('')
  const navigate = useNavigate()

  const login = (e: FormEvent) => {
    e.preventDefault()
    const user = { username, id: uuidv4() }
    signIn(user)
    navigate('/room')
  }

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value)
  }

  return (
    <>
      <form onSubmit={login} className='grid gap-4 p-4 bg-gray-200 rounded-lg'>
        <input onChange={handleInputChange} required minLength={5} maxLength={20} className='p-2 border border-gray-300 rounded-lg' type='text' placeholder='username' />
        <button className='p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700' type='submit'>Ingresar</button>
      </form>
    </>
  )
}

export default LoginForm
