import React from 'react'
import icon from '../../public/logo.avif'

const Loading = () => {
    return (
        <div className='w-screen h-screen'>
            <div className="w-full h-screen flex items-center justify-center bg-gray-100">
                <img
                    src={icon}
                    alt="Logo"
                    className="w-32 h-32 rounded-full animate-pulse"
                />
            </div>
        </div>
    )
}

export default Loading