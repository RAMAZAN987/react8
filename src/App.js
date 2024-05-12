import './App.css';
import Header from './components/Header/Header';
import Mans from './components/Mans/Mans';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Womans from '../src/components/Womans/Womans'
import About from './components/About/About'
import Home from './components/Home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path ='/Home' element={<Home />}/>
        <Route path ='/Mans' element={<Mans />}/>
        <Route path ='/Womans' element={<Womans />}/>
        <Route path ='/About' element={<About />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
