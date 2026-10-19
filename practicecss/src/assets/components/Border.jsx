import React from 'react'
import { Link } from 'react-router'

function Border() {
    return (
        <div className='m-10'>
            <Link to="/" className='bg-gray-700 text-white px-4 py-4 rounded-xl border-teal-200 hover:gray-900'
            >← back to list</Link>
        <div className='m-10 border-4 size-32 rounded-full bg-white border-fuchsia-600'></div>
        <div className='m-10 border-4 size-32 rounded-t-full bg-white border-cyan-500'></div>
        <div className='m-10 border-4 size-32 rounded-b-full bg-white border-cyan-500'></div>
        <div className='m-10 border-4 size-32 rounded-l-full bg-white border-cyan-500'></div>
        <div className='flex items-center'>
        <div className='m-2 border-4 size-32 rounded-ss-full bg-white border-cyan-500'></div>
        <div className='m-2 border-4 size-32 rounded-ss-full bg-white border-cyan-500 rotate-90'></div>
        </div>
        <div className=' flex items-center'>
        <div className='m-2 border-4 size-32 rounded-ee-full bg-white border-cyan-500 rotate-90'></div>
        <div className='m-2 border-4 size-32 rounded-ee-full bg-white border-cyan-500 '></div>
        </div>
        </div>
    )
}

export default Border