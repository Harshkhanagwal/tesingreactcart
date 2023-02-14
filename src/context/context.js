import React, { createContext, useState } from 'react'
import menuItems from '../api';


export const Cart = createContext()

const Context = ({ children }) => {

    const [cart, setCart] = useState([])
    
    const products =[
        ...new Set(menuItems.map((curentElem) => {
            return (curentElem)
        })
    )
    ]

    return (
        <Cart.Provider value={{products,  cart, setCart}}>{children}</Cart.Provider>
    )
}

export default Context
