import { useRef, useEffect } from 'react'

import { io } from 'socket.io-client'
import useMessages from '../hooks/useMessages'

const Room = () => {
  // const socket = io('http://localhost:3000')

  const lastElementRef = useRef<HTMLDivElement>(null)

  const [user, messages, handleSubmit] = useMessages([
    {
      message: 'Hola People este es eun mensaje de prueba de un usuario random',
      user: {
        username: 'Random',
        id: 'asdasd'
      },
      date: new Date()
    }
  ])

  useEffect(() => {
    lastElementRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <main className='container grid grid-rows-[1fr_auto] gap-4 p-4 mx-auto '>
      <div className='w-full max-w-4xl max-h-[calc(100vh-230px)] grid auto-rows-min p-4 mx-auto overflow-y-scroll rounded-md bg-slate-100'>

        {
          messages.map((message, index) => (
            <div key={index} className={`${message.user.username === user?.username ? 'justify-self-end' : 'justify-self-start'}  text-lg font-medium p-2 my-1 rounded-md  flex flex-col max-w-lg bg-gray-200`}>
              <p className='text-gray-700 break-words'>
                {message.message}
              </p>
              <span className={`${message.user.username === user?.username ? 'text-end' : 'text-start'} text-xs text-gray-500 `}>{message.user.username === user?.username ? 'You' : message.user.username} {message.date.toLocaleTimeString()}</span>
            </div>))
        }
        <div ref={lastElementRef} className='h-2' />
      </div>
      <form className='flex w-full max-w-4xl mx-auto my-4' onSubmit={handleSubmit}>
        <input multiple type='text' name='message' placeholder='Type your message' className='w-full px-4 py-2 rounded-s-md' />
        <button type='submit' className='p-4 text-white bg-blue-500 rounded-e-md'>Send</button>
      </form>
    </main>
  )
}

export default Room
