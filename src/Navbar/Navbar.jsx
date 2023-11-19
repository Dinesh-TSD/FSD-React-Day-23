import React from 'react'
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import img from './cart.png'

const Navbar = ({ cart }) => {
  return (
    <>
      <div className='navbar-container'>
        <div className='nav-left'>
          <h2>Shop<span>cart</span></h2>
        </div>
        <div className='nav-right'>
          <nav>
            <ul className='navbar'>
              <li>
                <NavLink id='page' to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink id='page' to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink id='page' to={"/order"}>Orders</NavLink>
              </li>
              <div >
                <NavLink to={"/cart"}>
                  <button className='loginbtn'>
                    <span><img src={img} alt="" /></span>
                    <span>Cart</span>
                    <span id='count'>{cart.length}</span>
                  </button>
                </NavLink>
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Navbar