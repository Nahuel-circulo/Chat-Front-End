import { useContext, FormEvent } from 'react'
import { AppContext } from '../context/App.context'
import { io } from 'socket.io-client'

const messages = [
  {
    message: 'Hello, how are you?',
    user: 'Nahuel'
  },
  {
    message: 'Hi, how have you been?',
    user: 'YYYYY'
  },
  {
    message: 'Hello, how are you?',
    user: 'Nahuel'
  },
  {
    message: 'Hi, how have you been?',
    user: 'YYYYY'
  },
  {
    message: 'Hello, how are you?',
    user: 'Nahuel'
  },
  {
    message: 'Hi, how have you been?',
    user: 'YYYYY'
  },
  {
    message: 'Hello, how are you?',
    user: 'Nahuel'
  },
  {
    message: 'Hi, how have you been?',
    user: 'YYYYY'
  },
  {
    message: 'Hello, how are you?',
    user: 'Nahuel'
  },
  {
    message: 'Hi, how have you been?',
    user: 'YYYYY'
  },
  {
    message: 'Hello, how are you?',
    user: 'Nahuel'
  },
  {
    message: 'Hi, how have you been?',
    user: 'YYYYY'
  },
  {
    message: 'Hello, how are you?',
    user: 'Nahuel'
  },
  {
    message: 'Hi, how have you been?',
    user: 'YYYYY'
  },
  {
    message: 'Hello, how are you?',
    user: 'Nahuel'
  },
  {
    message: 'Hi, how have you been?',
    user: 'YYYYY'
  }
]
const Room = () => {
  // const socket = io('http://localhost:3000')

  const { authState } = useContext(AppContext)

  const { user } = authState

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <main className='container grid grid-rows-[1fr_auto] gap-4 p-4 mx-auto '>
      <div className='w-full max-w-4xl max-h-[calc(100vh-220px)] p-4 mx-auto overflow-y-scroll rounded-md bg-slate-200'>

        {
          messages.map((message, index) => (
            <div key={index} className={`${message.user === user?.username ? 'text-right' : 'text-left'}  text-lg font-medium p-2 my-1`}>
              <p>
                {message.message}
              </p>
              <span className='text-xs text-gray-500'>{message.user === user?.username ? 'You' : message.user}</span>
            </div>))
        }
      </div>
      <form className='flex w-full max-w-4xl mx-auto my-4' onSubmit={handleSubmit}>
        <input type='text' placeholder='Type your message' className='w-full px-4 py-2 rounded-s-md' />
        <button type='submit' className='p-4 text-white bg-blue-500 rounded-e-md'>Send</button>
      </form>
    </main>
  )
}

export default Room
