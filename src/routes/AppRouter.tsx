import { createBrowserRouter } from 'react-router-dom'
import LogintLayout from '../layouts/LoginLayout'
import Home from '../pages/Home'
import Room from '../pages/Room'
import RoomLayout from '../layouts/RoomLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LogintLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }
    ]
  },
  {
    path: '/room',
    element: <RoomLayout />,
    children: [{
      index: true,
      element: <Room />
    }]
  }
])
