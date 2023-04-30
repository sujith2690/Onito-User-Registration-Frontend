import React from 'react'

const Personal = ({ register, errors, watch,inputType,setInputType }) => {
    const Gender = [
        { value: 'Male' },
        { value: 'Female' },
        { value: 'Other' },
    ]
    const IDSss=['Aadhar','Pan']
    const IDS = [
        { value: 'Aadhar' },
        { value: 'Pan' }
    ]
    const dob = watch('dob');

const handleInputChange = (event) => {
    const value = event.target.value;
    setInputType(value);
  };
    return (
        <div className="max-w-6xl p-6 mx-auto bg-gray-800 rounded-md shadow-md ">
            <h2 className='bold text-xl text-green-600'>Personal Details</h2>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-3">
                <div>
                    <label className="text-white dark:text-gray-200">Name</label>
                    <input id="username" type="text"
                        {...register('userName', { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                    {errors.userName && (
                        <p className="mt-2 text-red-600">{errors.userName.message}</p>
                    )}
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" >Age or Date of Birth</label>
                    <div className='flex'>
                        <input type="number" min="0" max="130"
                            {...register('age')}
                            className="block w-18 px-4 py- mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        <input {...register('DOB')} min='1899-01-01' max='2023-04-30' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="date" />
                    </div>
                        {errors.age && (
                            <p className="mt-2 text-red-600">{errors.age.message}</p>
                        )}
                        {errors.DOB && (
                            <p className="mt-2 text-red-600">{errors.DOB.message}</p>
                        )}
                    {(errors.age && errors.DOB) && (
                        <p className="mt-2 text-red-600">Please enter either age or date of birth.</p>
                    )}
                </div>

                <div>
                    <label className="text-white dark:text-gray-200" >Sex</label>
                    <select {...register('sex', { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                        <option value="">Enter Sex</option>
                        {Gender.map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.value}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" >Mobile</label>
                    <div className='flex'>
                        <input type="text"
                            defaultValue={"+91 "} {...register('countryCode')}
                            className="block w-16 px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />
                        <input placeholder='Enter Mobile' type="text"
                            {...register('mobile', { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" />

                    </div>
                    {errors.mobile && (
                        <p className="mt-2 text-red-600">{errors.mobile.message}</p>
                    )}
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" >Gov Issued Id<span className="text-red-700"> *</span></label>
                    <select
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        {...register('govId', { required: true })}
                        
                         id="inputType"
                        onChange={handleInputChange} value={inputType}
                    >
                        <option value="">Choose ID</option>

                        {IDSss.map((item, index) => {
                            return (<option key={index} value={item}>{item}</option>)
                        })}
                       
                    </select>
                    {errors.govId && (
                        <p className="mt-2 text-red-600">{errors.govId.message}</p>
                    )}
                </div>
                <div>
                    <label className="text-white dark:text-gray-200" >ID Number</label>

                    {inputType === 'Aadhar' ? (

                        <input placeholder='Aadhar No' {...register('aadhar', { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                               />
                    ) : inputType === 'Pan' ? (
                        <input placeholder='Pan ID' {...register('pan', { required: true })}
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                            type="text"  />
                    ) :
                        <input
                            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                        />
                    }
                    {inputType === 'Aadhar' ? <>
                        {errors.aadhar && (
                            <p className='flex'>
                                <span className='text-red-600'>{errors.aadhar.message}</span>
                            </p>
                        )}</> : inputType === 'Pan' ? <>
                            {errors.pan && (
                                <p className='flex'>
                                    <span className='text-red-600'>{errors.pan.message}</span>
                                </p>
                            )}
                        </> : null}
                        
                </div>


            </div>
        </div>




    )
}

export default Personal