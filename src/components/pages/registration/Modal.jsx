import React from 'react'

const Modal = ({ visible,onClose,onSubmit }) => {

    if (!visible) return null
    const handleClose = (e) => {
        if (e.target.id === "container") {
            // removed()
            onClose()
        }
    }
    const handleSave=()=>onSubmit()
    const handleCancel=()=>onClose()
    return (
        <div
            id='container'
            onClick={handleClose}
            className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
            <div className='bg-blue-950 p-10 rounded'>
                <p className='text-white text-xl'>Save the Given Data..?</p>


                <div className='flex gap-3'>
                    <button className="px-5 py-2  bg-red-800 text-white rounded" 
                    onClick={handleSave}
                    >Yes</button>
                    <button className="px-5 py-2  bg-green-800 text-white rounded" 
                    onClick={handleCancel}
                    >No</button>
                </div>
            </div>


        </div>
    )
}

export default Modal