import React, {useState} from 'react'
import './Navbar.css'
import { useContext } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <p>PLANTERA</p>
        <img src={logo} alt="" />
        
      </div>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("shop")}}><NavLink style={{textDecoration: 'none'}} to='/'>Shop</NavLink>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("anthurium")}}><NavLink style={{textDecoration: 'none'}} to='/anthurium'>Anthuriums</NavLink>{menu==="anthurium"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("philodendron")}}><NavLink style={{textDecoration: 'none'}} to='/philodendron'>Philodendrons</NavLink>{menu==="philodendron"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("alocasia")}}><NavLink style={{textDecoration: 'none'}} to='/alocasia'>Alocasias</NavLink>{menu==="alocasia"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :<NavLink to='/Login'><button>Login</button></NavLink>
        }
      <NavLink to='/Cart' ><img src={cart_icon} alt="" /></NavLink>
      <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
