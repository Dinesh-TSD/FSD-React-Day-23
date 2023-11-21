import React from 'react'
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import img from './cart.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navbars = ({ cart }) => {
  return (
    <>

      <Navbar fixed='top' expand="lg" className="bg-body-tertiary navs">
        <Container>
          <Navbar.Brand ><NavLink to={'/'}><div className="heading">Shop <span>cart</span></div></NavLink>  </Navbar.Brand>
          <div >
            <NavLink to={"/cart"}>
              <button className='loginbtn'>
                <span><img src={img} alt="" /></span>
                <span>Cart</span>
                <span id='count'>{cart.length}</span>
              </button>
            </NavLink>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className='collap' id="basic-navbar-nav">
            <Nav className="me-auto">
              <ul className='navbar-home'>
                <li>
                  <NavLink id='page' to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink id='page' to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink id='page' to={"/order"}>Orders</NavLink>
                </li>

              </ul>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbars