import { useContext, useEffect } from 'react'
import { AppContext } from '../context/App.context'
import { useNavigate } from 'react-router-dom'

const Room = () => {
  const { authState } = useContext(AppContext)
  const { isLoggedIn, user } = authState
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/')
    }
  }, [isLoggedIn, navigate])

  return (
    <div className='min-h-screen '>
      <h1 className='text-3xl text-white'>{user?.username}</h1>
    </div>
  )
}

export default Room
