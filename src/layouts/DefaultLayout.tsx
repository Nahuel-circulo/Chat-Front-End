import { Outlet } from 'react-router-dom'
const DefaultLayout = () => {
  return (
    <main className=' bg-neutral-900'>
      <Outlet />
    </main>
  )
}

export default DefaultLayout
