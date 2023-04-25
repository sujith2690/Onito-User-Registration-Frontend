import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className='text-center flex justify-center gap-3'>
        <button  class="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          User Registration
        </button>
        <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Registered Users
        </button>
      </div>
    </>
  )
}

export default Home