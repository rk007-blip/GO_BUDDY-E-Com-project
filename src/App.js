import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Signin from './Component/Sign_in/Signin ';
import Cart from './Component/cart/cart';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/abt' element={<About />}/>
        <Route path='/Signin' element={<Signin />}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
