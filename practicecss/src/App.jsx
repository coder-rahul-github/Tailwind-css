import { Route, Routes } from 'react-router'
import Transition from './assets/components/Transition';
import Contentlist from './assets/components/Contentlist';
import Grid from './assets/components/Grid';


function App() {
  
  
  return(
    <ul>
      <Routes>
        <Route path='/' element={<Contentlist/>}/>

        <Route path="/Transition"  element={<Transition/>} />
        <Route path="/Grid"  element={<Grid/>} />
      </Routes>
      
    </ul>
  );
}

export default App
