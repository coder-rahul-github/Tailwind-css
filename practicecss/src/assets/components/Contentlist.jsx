
import { Link } from 'react-router';

function Contentlist() {
    const content=
    [{label:"transition&transformation", href:"/transition"},
      {label:"Grid",href:"/Grid"},
      {label:"Animate",href:"/Animate"},
      {label:"Border",href:"/Border"},
    ]
    return (
        <div className='bg-amber-300 h-screen p-8'>
          <h1 className='mb-6 text-3xl font-bold'>Tailwindcss Topics</h1>
        <ul>
      {content.map((item)=>(
        <li key={item.href}>
          <Link to={item.href}><h1 className='text-red-500 hover:underline'>{item.label}</h1></Link>
        </li>
        
      ))}
      </ul>
        </div>
        
    )
}

export default Contentlist;
