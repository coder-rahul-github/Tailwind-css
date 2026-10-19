import { Route, Routes } from 'react-router'
import Transition from './assets/components/Transition';
import Contentlist from './assets/components/Contentlist';
import Grid from './assets/components/Grid';
import Animate from './assets/components/Animate';
import Border from './assets/components/Border';
import Gallery from './assets/components/Gallery';


function App() {
  
  
  return(
    <ul>
      <Routes>
        <Route path='/' element={<Contentlist/>}/>

        <Route path="/Transition"  element={<Transition/>} />
        <Route path="/Grid"  element={<Grid/>} />
        <Route path="/Animate"  element={<Animate/>} />
        <Route path="/Border"  element={<Border/>} />
        <Route path="/Gallery"  element={<Gallery/>} />
      </Routes>
      
    </ul>
  );
}

export default App
