import React from 'react'
import { Cart } from '../context/context'
import { useContext } from 'react';
import Singlecard from '../components/singleCard';

const Cartpage = () => {

  const { cart , setCart } = useContext(Cart);

  return (
    <div className="grid">
      {
        cart.map((curElem) => {
          return (
            < Singlecard curElem={curElem} cart={cart} setCart={setCart} />
          )
        })
      }
    </div>
  )
}

export default Cartpage