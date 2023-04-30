import React from 'react'

const Contact = ({ register, errors }) => {

    const Relation = [
        { value: 'Father' },
        { value: 'Mother' },
        { value: 'Other' },]
    return (
        <div className="max-w-6xl p-6 mx-auto bg-gray-800 rounded-md shadow-md ">
            <h2 className='bold text-xl text-green-600'>Personal Details</h2>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                <div>
                    <label className="text-white dark:text-gray-200">Guardian Details</label>
                    <select {...register('relationship', { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        {...register('relationship')}
                    >
                        <option value="">Relationship</option>
                        {Relation.map((option, index) => {
                            return (<option key={index} value={option.value}>{option.value}</option>)
                        })}
                    </select>
                    {errors.relationship && (
                        <p className="mt-2 text-red-600">{errors.relationship.message}</p>
                    )}
                </div>
                <div>
                    <label className="text-white dark:text-gray-200">Name</label>
                    <input id="username" type="text" placeholder='Guardian Name'
                        {...register('name',{required:true})}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    {errors.name && (
                        <p className="mt-2 text-red-600">{errors.name.message}</p>
                    )}
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" >Emergency Contact Mobile</label>
                    <div className='flex'>
                         <input placeholder='Mobile Number' type="text"
                            {...register('emergencyContact', { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    </div>
                    {errors.emergencyContact && (
                        <p className="mt-2 text-red-600">{errors.emergencyContact.message}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact