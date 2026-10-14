import React from 'react'
import { Link } from 'react-router'

function Grid() {
    return (
        <div>
        <div className='m-10'>
            <Link to="/" className='mb-8 rounded inline-block px-4 py-2 bg-gray-800 text-white hover:bg-gray-700'>← back to list</Link>
        </div>
        <div className=' grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
        <div className="bg-red-300 p-8 border border-red-800"></div>
        <div className="bg-red-300 p-8 border border-red-800"></div>
        <div className="bg-red-300 p-8 border border-red-800"></div>
        <div className="bg-red-300 p-8 border border-red-800"></div>
        <div className="bg-red-300 p-8 border border-red-800"></div>
        <div className="bg-red-300 row-span-2 p-8 border border-red-800"></div>
        <div className="bg-red-300 p-8 border border-red-800"></div>
        <div className="bg-red-300 p-8 border border-red-800"></div>
        </div>
        </div>
    )
}

export default Grid
