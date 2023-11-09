import React from 'react'
import './Home.css'
import Card from '../Card/Card'
import data from '../ProductData'
import { NavLink } from 'react-bootstrap'

const Home = ({ handleClick }) => {
  return (
    <>
      <div className='containers'>
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            <p class="navbar-brand">Best Diwali Offers for Mobiles,Laptop,Desktop extra...</p>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <div class="container px-4 px-lg-5 mt-5">
          <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

            {data.map((item, index) => {
              return <NavLink key={index}>
                <Card
                  detail={item}
                  handleClick={handleClick}
                />
              </NavLink>
            })}
          </div>
        </div>
        <div class="card-footer text-muted">
          <p>Created by Dinesh & Copyright Claim 2023</p>
          
        </div>
      </div>

    </>
  )
}

export default Home