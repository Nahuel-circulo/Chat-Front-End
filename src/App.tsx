import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen bg-neutral-900'>
      <h1 className='text-white'>React-Node Chat app</h1>
    </div>
  )
}

export default App
