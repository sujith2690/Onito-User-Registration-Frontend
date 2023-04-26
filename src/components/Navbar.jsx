import React from 'react'

const Navbar = () => {


    return (
        <div className='flex justify-between items-center'>
            <img className='w-60' src="https://www.onito.io/assets/img/onito-onlyname-logo-removebg.png" alt="" />
            <div className='flex justify-between'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mr-1">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Navbar