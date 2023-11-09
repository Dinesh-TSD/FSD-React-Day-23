import './App.css';
import Navbar from './Navbar/Navbar';
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Cart from './Cart/Cart';

function App() {
  // const [show,setShow]=useState(true);
  const [cart,setCart]=useState([]);
  const [warning,setWaring]=useState(false);
  const [total,setTotal]=useState(0);
  const [add,setAdd]=useState(1)

  let handleClick=(item)=>{
    let isPresent=false;
    cart.forEach((product)=>{
      if(item.id === product.id)
      isPresent=true;
    })
    if(isPresent){
      setWaring(true);
      setTimeout(()=>{
        setWaring(false)
      },1000)
      return;
    }
    setCart([...cart,item])
    setTotal(total + item.price)
  }

  let handleRemove=((item)=>{
    let itemIndex=cart.findIndex(obj =>obj.id === item.id)
    cart.splice(itemIndex,1)
    setCart([...cart])
    setTotal(total - item.price)
  })

  let Increment=((item)=>{
    cart.forEach((product)=>{
      if(item.id === product.id)
      setAdd(add + 1)
      setTotal(total + item.price)
    })
  })

  let Decrement=((item)=>{
    cart.forEach((product)=>{
      if(item.id === product.id)
      setAdd(add - 1)
      setTotal(total - item.price)
    })
  })

  return (
    <BrowserRouter>
    <Navbar warn={warning} size={cart.length}/>
    <Routes>
        <Route path="/" element={<Home handleClick={handleClick} />}/>
        <Route path="/cart" element={<Cart cart={cart}  handleRemove={handleRemove} Increment={Increment} Decrement={Decrement} add={add} total={total} />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
