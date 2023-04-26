import React from 'react'

const Other = ({register}) => {
    return (
        <div>
            <h1 className='text-xl mb-2'>Other Details</h1>
            <div className='flex'>
                <div>
                    <label htmlFor="occupation">Occupation<span className='text-red-700'>*</span></label>
                    <input placeholder='occupation' type="text" className='border border-blue-800 rounded' {...register('occupation')} />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile<span className='text-red-700'>*</span></label>
                    <input type="text" className='border border-blue-800 rounded' {...register('mobile')} />
                </div>
                <div>
                    <label htmlFor="mobile">Mobile<span className='text-red-700'>*</span></label>
                    <input type="text" className='border border-blue-800 rounded' {...register('mobile')} />
                </div>
            </div>
        </div>
    )
}

export default Other