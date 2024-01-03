"use client"

import { FcGoogle } from 'react-icons/fc'

const Auth = () => {
    const inputStyles = 'border border-gray-300 sm:text-sm text-black rounded:lg block w-full p-2.5 focus:outline-none'


  return (
    <section className="container mx-auto">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
        <div className="flex items-center mb-8 flex-col md:flex-row justify-between">
          <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
            Create an account
          </h1>
          <p>OR</p>
          <span className="inline-flex items-center ">
            <FcGoogle className="ml-3 text-4xl cursor-pointer" />
          </span>
        </div>
        <form className="space-y-4 md:space-y-6">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="name@example.com"
            required
            className={inputStyles}
          />
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Smith John"
            required
            className={inputStyles}
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            minLength={6}
            className={inputStyles}
          />
          <button type='submit' className='w-full bg-tertiary-dark font-medium focus:outline-none 
          rounded-lg text-sm px-5 py-2.5 text-center'>Sign Up</button>
        </form>

        <button className='text-blue-700 underline'>Log In</button>
      </div>
    </section> 
  );
}

export default Auth