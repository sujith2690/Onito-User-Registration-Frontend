import React from 'react'

const Address = ({ register }) => {
    const States = ['Kerala', 'Tamilnadu', 'Karnataka', 'Punjab']
    return (
        <div className="max-w-6xl p-6 mx-auto bg-gray-800 rounded-md shadow-md ">
            <h2 className='bold text-xl text-green-600'>Address Details</h2>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-4">
                <div>
                    <label className="text-white dark:text-gray-200">Address</label>
                    <input type="text"
                        {...register('address')}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>

                <div>
                    <label className="text-white dark:text-gray-200">State</label>
                    <select {...register('state')}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        {...register('relationship')}
                    >
                        <option value="">State</option>
                        {States.map((option, index) => {
                            return (<option key={index} value={option}>{option}</option>)
                        })}
                    </select>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200">City</label>
                    <input type="text" placeholder='Enter Your City Name'
                        {...register('city')}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label className="text-white dark:text-gray-200">Country</label>
                    <input type="text" placeholder='Your Country'
                        {...register('country')} defaultValue={"India "}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
                <div>
                    <label className="text-white dark:text-gray-200">Pincode</label>
                    <input type="text" placeholder='Pincode'
                        {...register('pinCode')}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                </div>
            </div>
        </div>
    )
}

export default Address