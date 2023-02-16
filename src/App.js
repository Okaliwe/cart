import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Navbar from './Component/navbar';
import Shop from './Pages/shop/shop';
import Cart from './Pages/cart/cart';
import { ShopContext} from './Context/shopContext';

function App() {
  return (
    <div className="App">
      <ShopContext>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
      </ShopContext>
    </div>
  );
}

export default App;
