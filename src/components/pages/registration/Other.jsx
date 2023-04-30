import React, { useState } from 'react'
import Modal from './Modal'

const Other = ({ register }) => {
    const Religions = ['Hindu', 'Muslim', 'Christian', 'Sikh', 'Other']
    const [showModel, setShowModel] = useState(false)
    return (

        <div className="max-w-6xl p-6 mx-auto bg-gray-800 rounded-md shadow-md ">
            <h2 className='bold text-xl text-green-600'>Other Details</h2>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                <div>
                    <label className="text-white dark:text-gray-200">Occupation</label>
                    <input type="text"
                        {...register('occupation')} placeholder='Enter Occupation'
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-white dark:text-gray-200">Religion</label>
                    <select
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        {...register('religion')}
                    >
                        <option value="">State</option>
                        {Religions.map((option, index) => {
                            return (<option key={index} value={option}>{option}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200">Marital Status</label>
                    <select
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        {...register('status')}
                    >
                        <option value="">Status</option>
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Married">Widow</option>
                    </select>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200">Blood Group</label>
                    <input type="text"
                        {...register('blood')}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label className="text-white dark:text-gray-200">Nationality</label>
                    <input type="text"
                        {...register('nationality')} defaultValue={'Indian'}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
            </div>
        </div>

    )
}

export default Other