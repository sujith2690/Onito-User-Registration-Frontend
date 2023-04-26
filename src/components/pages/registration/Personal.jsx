import React, { useState } from 'react'

const Personal = ({ register, errors }) => {
    const Gender = [
        { value: 'Male' },
        { value: 'Female' },
        { value: 'Other' },
    ]
    const [formData, setFormData] = useState({ typeId: '', value: '' });

    const handleChange = (event) => {
        setFormData({ ...formData, value: event.target.value });
    };
    return (

        <div>
            <h1 className='text-xl mb-2'>Personal Details</h1>
            <div className='flex'>
                <div >
                    <label htmlFor="name">Name <span className='text-red-700'>*</span></label>
                    <input placeholder='Enter Name' type="text" className='border border-blue-800 rounded'
                        {...register('userName', { required: true })}
                    />
                    {errors.userName && (
                        <div className='flex'>
                            <span className='text-red-600'>{errors.userName.message}</span>
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="dob">Age<span className='text-red-700'>*</span></label>
                    <input placeholder='Age in Years' type="number" className='border border-blue-800 rounded' {...register('dob', { required: true })} />
                    {errors.age && (
                        <div className='flex'>
                            <span className='text-red-600'>{errors.age.message}</span>
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="sex">Sex <span className='text-red-700'>*</span></label>
                    <select type="text" className='border border-blue-800 rounded' {...register('sex', { required: true })} >
                        <option value="">Enter Sex</option>
                        {Gender.map((option, index) => {
                            return (<option key={index} value={option.text}>{option.value}</option>)
                        })}
                    </select>
                    {errors.sex && (
                        <div className='flex'>
                            <span className='text-red-600'>{errors.sex.message}</span>
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="mobile">Mobile<span className='text-red-700'>*</span></label>
                    <input className='border border-blue-800 rounded w-8' defaultValue={"+91 "} {...register('countryCode')} />
                    <input placeholder='Enter Mobile' type="number" className='border border-blue-800 rounded' {...register('mobile', { required: true })} />
                    {errors.mobile && (
                        <div className='flex'>
                            <span className='text-red-600'>{errors.mobile.message}</span>
                        </div>
                    )}
                </div>
                <div>
                    <label htmlFor="govId">Gov Issued Id<span className='text-red-700'>*</span>
                        {/* <input placeholder='ID Type' type="text" className='border border-blue-800 rounded' {...register('govId')} /> */}
                        <select className='border' {...register('GovID')}
                            value={formData.typeId}
                            onChange={(event) => setFormData({ ...formData, typeId: event.target.value })}
                        >
                            <option value="">Select an option</option>
                            <option value="Aadhar" >Aadhar</option>
                            <option value="Pan">Pan</option>
                        </select>
                        {errors.govId && (
                            <div className='flex'>
                                <span className='text-red-600'>{errors.govId.message}</span>
                            </div>
                        )}
                    </label>
                    {formData.typeId === 'Aadhar' ? (
                        <input {...register('AadharNO')} className='border border-blue-800 rounded' type="number" value={formData.value} onChange={handleChange} minLength={12} maxLength={12} />
                    ) : formData.typeId === 'Pan' ? (
                        <input {...register('PanNO')} className='border border-blue-800 rounded' type="text" value={formData.value} onChange={handleChange} minLength={12} maxLength={10} />
                    ) : <input className='border border-blue-800 rounded' type="text" value={formData.value} onChange={handleChange} minLength={12} maxLength={10} />}

                    
                </div>
            </div>
        </div >

    )
}

export default Personal