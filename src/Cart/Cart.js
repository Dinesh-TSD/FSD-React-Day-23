import React from 'react'
import './Cart.css'

const Cart = ({ cart, total, handleRemove,Increment,Decrement,add }) => {


    return (
        <>
            <div className='cartbox'>
                {
                    cart.map((item) => {
                        return <div className="card cart" key={item.id}>
                            <div className="row">
                                <div className="col-lg-2 cart-img">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className='col-lg-7 name'>
                                    <div><p>{item.name}</p></div>
                                    <div className="inc-dec">
                                        <button onClick={()=>Decrement(item)}>-</button>
                                        <span>{add}</span>
                                        <button onClick={()=>Increment(item)}>+</button>
                                    </div>
                                    <div><span>Rs.{item.price}</span></div>

                                </div>
                                <div className='col-lg-2 remove'>
                                    <button onClick={() => handleRemove(item)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    })
                }
                <div className='total'>Total Price<span>Rs.{total}</span></div>

            </div>
        </>
    )
}

export default Cart