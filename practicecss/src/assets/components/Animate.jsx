import React from 'react'
import { Link } from 'react-router'

function Animate() {
    return (
        <div>
            <Link to="/" className='bg-gray-800 text-white px-4 py-2 m-10 hover:text-gray-400'>← back to list</Link>
        <div className='m-10'>
        <div className="bg-red-800 size-20 rounded-full animate-bounce"></div>
        <hr className='w-64'/>
        </div>
        <div className='m-10' ><img className='w-64 animate-spin' src="gopro.jpg"></img></div>
        </div>
    )
}

export default Animate
