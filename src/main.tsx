import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/AppRouter.tsx'
import AppProvider from './context/App.context.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppProvider>
    <RouterProvider router={router} />
  </AppProvider>

)
