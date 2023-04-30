import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Navbar from '../../Navbar'
import Personal from './Personal'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import Other from './Other'
import Contact from './Contact'
import Address from './Address'
import Modal from './Modal'

const UserRegistration = () => {

    const schema = yup.object({

        // userName: yup.string().required('Name is Required'),
        // age: yup.string().max(3).required('Age is Required'),
        // sex: yup.string().required('Gender is Required'),
        // mobile: yup.string().min(10).matches(/^[6-9]\d{9}$/, 'Mobile number is not valid').required('Mobile Number is Required'),
        // govId: yup.string().required('GovId is Required'),
        // govId: yup.string().required('GovId is Required'),
        // aadhar:yup.string().min(12).max(12).matches(/^\d{12}$/, 'Aadhar number is not valid').required('Aadhar Number is Required') ,
        // pan:yup.string().min(10).max(10).matches(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/, 'PAN number is not valid'),
        // //.............CONTACT............................
        // relationship: yup.string().required('Relationship is Required'),
        // name: yup.string().required('Name is Required'),
        // emergencyContact: yup.string().min(10).matches(/^[6-9]\d{9}$/, 'Mobile number is not valid').required('Mobile Number is Required'),


    }).required()
    const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({ resolver: yupResolver(schema) })

    const [inputType, setInputType] = useState("");
    const [data, setData] = useState({
        userName: "",
        age: "",
        sex: "",
        mobile: "",
        govId: "",
        aadhar: "",
        pan: "",
        relationship: "",
        name: "",
        emergencyContact: "",
        address: "",
        relationship: "",
        name: "",
        emergencyContact: "",
    })



    const onSubmit =  (values) => {
         setData((prevState) => {
            return {
                ...prevState,
                ...values
            };
        });
        // console.log(data,'--------')
        // reset();

    };
    useEffect(() => {
        console.log(data, '-----useffkect');
    }, [data]);

    return (
        <div>
            <Navbar />
            <div>
                <h1 className='text-center bold text-3xl text-amber-950'>User Registration</h1>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-gray-800 m-3 border'>

                    {/* <Personal register={register} errors={errors} watch={watch} setInputType={setInputType} inputType={inputType} />
                    <Contact register={register} errors={errors} /> 
                    <Address register={register} />  */}
                    <Other register={register} />
                    <div className="flex justify-end mt-5 mb-5 mr-5">
                        <button type='button' className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                            cancel
                        </button>
                        <button type="submit" className="bg-transparent hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ml-2">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            {/* <Modal
            visible={showModel}
            onClose={handleClose}
            onSubmit={onSubmit}
            /> */}
        </div>
    )
}

export default UserRegistration