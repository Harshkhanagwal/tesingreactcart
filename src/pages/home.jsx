import React from 'react'
import { useContext } from 'react';
import { Cart } from '../context/context'
import Card from '../components/Card';
import '../style/grid.css'


const Home = () => {

   
    const { products } = useContext(Cart);

    return (
        <>
            <div className="grid" >
                <Card data={products} />
            </div>
        </>
    )
}

export default Home