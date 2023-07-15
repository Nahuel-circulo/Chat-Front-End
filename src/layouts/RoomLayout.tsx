import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/App.context'
const RoomLayout = () => {
  const { authState } = useContext(AppContext)
  return (
    <>
      {
        authState.isLoggedIn
          ? <main className='bg-slate-900'><Outlet /></main>
          : <Navigate to='/' />
      }
    </>
  )
}

export default RoomLayout
