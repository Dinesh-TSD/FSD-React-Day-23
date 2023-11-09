import React from 'react'
import './Card.css'

const Card = ({ detail, handleClick }) => {
  return (
    <>
      <div class="col mb-5">
        <div class="card">
          <img src={detail.img} class="card-img-top" alt="..."></img>
          <div class="card-body p-4">
            <div class="text-center">
              <h5 class="fw-bolder">{detail.name}</h5>
              <b>₹{detail.price}</b>
              <div className='star'>
                <b>{detail.stars}</b>
                <img src={detail.starpng} alt="" />
              </div>
            </div>
          </div>
          <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center"><button onClick={() => handleClick(detail)} class="btn btn-outline-dark mt-auto" href="#">Add to Cart</button></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card