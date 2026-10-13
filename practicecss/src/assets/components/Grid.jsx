import React from 'react'
import { Link } from 'react-router'

function Grid() {
    return (
        <div className='m-10'>
            <Link to="/" className='mb-8 rounded inline-block px-4 py-2 bg-gray-800 text-white hover:bg-gray-700'>← back to list</Link>
        <h1>Grid</h1></div>
    )
}

export default Grid
