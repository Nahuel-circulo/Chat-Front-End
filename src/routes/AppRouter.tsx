import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '../layouts/DefaultLayout'
import Home from '../pages/Home'
import Room from '../pages/Room'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/room',
        element: <Room />
      }
    ]
  }
])
