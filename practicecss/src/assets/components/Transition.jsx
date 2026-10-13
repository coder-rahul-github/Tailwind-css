import React from 'react'
import { Link } from 'react-router'

function Transition() {
    return (
        <div className='m-15 gap-10'>
            <Link to="/" className='mb-6 inline-block rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700'>← back to list</Link>
            <h1 className='text-blue-500'>Learn about Transition-Transform in Tailwind css</h1>
            <img className='w-64 absolute left-1/3 hover:rotate-30 transform-3d scale-96 transition duration-1000' src='./gopro.jpg'/>
            <button className='bg-red-500 cursor-pointer rounded-xl w-32 p-2 hover:scale-x-200  hover:scale-y-150 transition-transform duration-1000'>click</button>
        </div>
    )
}

export default Transition
