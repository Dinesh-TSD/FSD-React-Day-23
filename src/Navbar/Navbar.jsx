import React from 'react'
import "./Navbar.css";
import { Link } from "react-router-dom";
import img from  './cart.png'

const Navbar = ({size,warn}) => {
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
                <Link id='page' to={"/"}>Home</Link>
              </li>
              <li>
                <Link id='page' to={"/about"}>About</Link>
              </li>
              <li>
                <Link id='page' to={"/order"}>Orders</Link>
              </li>
              <div >
                <Link to={"/cart"}>
                  <button className='loginbtn'>
                    <span><img src={img} alt="" /></span>
                    <span>Cart</span>
                    <span id='count'>{size}</span>
                  </button>
                </Link>

              </div>
            </ul>
          </nav>
          <div>
          {
            warn && <div className="warning">Item is already added to Cart</div>
          }
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar