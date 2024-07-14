import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import anthurium_banner from './Components/Assets/banner_anthurium.png';
import philodendron_banner from './Components/Assets/banner_philodendron.png';
import alocasia_banner from './Components/Assets/banner_alocasia.png';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/anthurium' element={<ShopCategory banner={anthurium_banner} category="anthurium"/>}/>
        <Route path='/philodendron' element={<ShopCategory banner={philodendron_banner} category="philodendron"/>}/>
        <Route path='/alocasia' element={<ShopCategory banner={alocasia_banner} category="alocasia"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
