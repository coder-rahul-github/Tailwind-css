import { Link, Route, Routes } from 'react-router'

function App() {
  const content=
    [{label:"transition&transformation", href:"/transition"},
      
    ]
  
  return(
    <div>
      <ul>
      {Map.content((item)=>(
        <li key={item.label}>
          <Link to={item.href}>{item.label}</Link>
        </li>
        
      ))}
      </ul>
      <Routes>
        <Route path="/Transition"  element={<Transition/>} />
      </Routes>
    </div>
  )
}

export default App
