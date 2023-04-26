import React from 'react'
import { useForm } from 'react-hook-form'
import Navbar from '../../Navbar'
import Personal from './Personal'
import * as yup from 'yup'
import {yupResolver} from '@hookform/resolvers/yup'

const UserRegistration = () => {

    const schema = yup.object({
        userName:yup.string().required('Name is Required'),
        age:yup.string().required('age is Required'),
        sex:yup.string().required('Gender is Required'),
        mobile:yup.string().required('Mobile Number is Required'),
        govId:yup.string().required('GovId is Required'),
    }).required()
    const { register, handleSubmit,formState: {errors} } = useForm({resolver:yupResolver(schema)})


    const onSubmit=values =>console.log(values)


    return (
        <div>
            <Navbar />

            <div>
                <h1 className='text-center bold text-3xl text-amber-950'>User Registration</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='m-3 border'>

                {/* <label htmlFor="name">Name <span className='text-red-700'>*</span></label>
                    <input placeholder='Enter Name' type="text" className='border border-blue-800 rounded'
                        {...register('userName',{ required: true })}
                    />
                    {errors.userName && (
                        <span className='text-red-600'>{errors.userName.message}</span>
                    )} */}
               
                    <Personal register={register} errors={errors} />


                    <button type='submit' className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default UserRegistration