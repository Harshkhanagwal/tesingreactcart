import React, { useContext } from 'react';
import { Cart } from '../context/context'
import '../style/card.css'
import '../style/grid.css'
import Singlecard from './singleCard';

const Card = ({ data }) => {

    const { cart, setCart} = useContext(Cart);


    console.log(cart)

    return (
        <>

            {
                data.map((curElem) => {
                    return (
                        < Singlecard curElem={curElem} cart={cart} setCart={setCart}/> 
                    )
                })
            }
        </>
    )
}

export default Card