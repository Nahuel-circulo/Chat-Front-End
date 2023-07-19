import { Navigate, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../context/App.context'

const RoomLayout = () => {
  const { authState, logout } = useContext(AppContext)

  const { user } = authState
  return (
    <>
      {
        authState.isLoggedIn
          ? <main className='min-h-screen bg-slate-900 grid grid-rows-[80px_1fr]'>
            <div className='container flex items-center justify-end gap-4 p-4 mx-auto '>
              <p className='text-lg text-white'>{user?.username}</p> <button onClick={logout} className='p-2 text-white bg-red-500 rounded-md'>LogOut</button>
            </div>
            <Outlet />
            {/* eslint-disable-next-line react/jsx-closing-tag-location */}
          </main>
          : <Navigate to='/' />
      }
    </>
  )
}

export default RoomLayout
