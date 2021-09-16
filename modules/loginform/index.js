export default function LoginForm() {
  return (
    <div className='p-8'>
      <p className='mb-8 font-bold text-white'>Login</p>
      <form className='w-full max-w-sm'>
        <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white mb-4'
          id='username'
          name='username'
          type='text'
          placeholder='Username'
        />
        <input
          className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-white mb-8'
          id='password'
          name='password'
          type='password'
          placeholder='Password'
        />
        <button
          className='shadow bg-white focus:shadow-outline focus:outline-none text-blue-800 font-bold py-2 px-4 rounded mb-8'
          type='submit'
        >
          Sign In
        </button>
      </form>
      <p className='font-medium text-white'>
        © Idafa.com, Pvt Ltd, All rights reserved.
      </p>
    </div>
  )
}
