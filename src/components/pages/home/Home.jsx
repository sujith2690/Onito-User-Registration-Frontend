import React from 'react'
import { Link } from "react-router-dom";
import Navbar from '../../Navbar'

const Home = () => {
    return (
        <>
        <Navbar/>
            <div className='text-center flex justify-center gap-3 '>
                <button className="bg-transparent  hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link to="registration">user Registration</Link>
                </button>
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                    <Link to="list">Registered User</Link>
                </button>
            </div>
        </>
    )
}

export default Home