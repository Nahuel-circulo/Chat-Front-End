import { FormEvent } from 'react'

const LoginForm = () => {
  const login = (e: FormEvent) => {
    e.preventDefault()
    console.log('login')
  }

  return (
    <>
      <form onSubmit={login} className='grid gap-4 p-4 bg-gray-200 rounded-lg'>
        <input required minLength={5} maxLength={20} className='p-2 border border-gray-300 rounded-lg' type='text' placeholder='username' />
        <button className='p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-700' type='submit'>Ingresar</button>
      </form>
    </>
  )
}

export default LoginForm
