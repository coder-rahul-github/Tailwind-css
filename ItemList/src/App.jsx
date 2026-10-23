import { useState } from 'react'
import {Items} from './assets/Component/Items'


function App() {
  const [search,setSearch] = useState("")
  const filtereditem=Items.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className='min-h-screen bg-gray-200 px-4 py-10'>
      <div className='max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md'>
        <input type='text' placeholder='search...' value={search} onChange={(e)=>setSearch(e.target.value)}
        className='w-full border border-gray-400 rounded-md px-3 py-3 mb-5 '/>
      </div>
      
    </div>
  )
}

export default App
