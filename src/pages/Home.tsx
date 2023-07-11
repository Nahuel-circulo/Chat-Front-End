import LoginForm from '../components/LoginForm'

const Home = () => {
  return (
    <section className='grid min-h-screen gap-4 place-content-center'>
      <h1 className='text-xl text-white'>Chat with React & Socket.io</h1>
      <LoginForm />
    </section>
  )
}

export default Home
