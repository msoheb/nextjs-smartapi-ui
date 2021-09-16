import Image from 'next/image'
import LoginForm from '../modules/loginform'
import loginBackground from '../public/images/login.svg'

export default function Home() {
  return (
    <main className='flex h-screen items-center'>
      <aside className='hidden md:flex flex-none'>
        <div className='container p-20 max-w-xl'>
          <h3 className='font-extrabold text-2xl max-w-xs mb-8 text-blue-800'>
            Get more things done with our Loggin platform.
          </h3>
          <p className='max-w-sm font-light mb-12 text-xl text-blue-800'>
            Access to the most Shariah compliant stocks curated for you at all
            in one place.
          </p>
          <Image src={loginBackground} alt='image with graph and people' />
        </div>
      </aside>
      <section className='flex flex-grow justify-center items-center bg-blue-800 h-screen'>
        <LoginForm />
      </section>
    </main>
  )
}
