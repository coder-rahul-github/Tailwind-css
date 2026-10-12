import { Link, Route, Routes } from 'react-router'
import Transition from './assets/components/Transition';
import Home from './assets/components/Home';


function App() {
  const content=
    [{label:"transition&transformation", href:"/transition"},
    {label:"Home", href:"/Home"},
      
    ]
  
  return(
    <div className='bg-pink-200 h-screen'>
      <h1>tailwindcss</h1>
      <ul>
      {content.map((item)=>(
        <li key={item.label}>
          <Link to={item.href}><h1 className='text-red-500'>{item.label}</h1></Link>
        </li>
        
      ))}
      </ul>
      <Routes>

        <Route path="/Home"  element={<Home/>} />
        <Route path="/Transition"  element={<Transition/>} />
      </Routes>
      
    </div>
  );
}

export default App
