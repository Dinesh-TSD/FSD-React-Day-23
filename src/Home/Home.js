import React from 'react'
import './Home.css'
import Product from '../Product/Product'
import Search from '../Navbar/Search'

const Home = ({ products, handleAddtoCart, handleRemoveItem, isInCart }) => {
  return (
    <>
      <Search />
      <div className="bg">
        <div className="row">
          {products.map((product, index) => (
            <Product
              key={index}
              product={product}
              handleAddtoCart={handleAddtoCart}
              handleRemoveItem={handleRemoveItem}
              isInCart={() => isInCart(product)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home