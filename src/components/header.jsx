import React from 'react'
import '../style/nav.css'
import { Link } from "react-router-dom";
import { Cart } from '../context/context';
import { useContext } from 'react';
// import { Cart } from '../context/context'

const Header = () => {

    const { cart} = useContext(Cart);

    return (
        <>
            <header className='main'>
                <div className="innerHeader container">
                    <div className="logoarea">
                        <Link to={"/"}>
                            <div className="logo">
                                <img src="/images/logo.jpg" alt='logo' height={50} />
                            </div>
                        </Link>
                    </div>
                    <div className="searcharea">
                        <div className="searchbar">
                            <input type="text" placeholder="search"className='searchbar-input' /><button className='searchBt'>search</button>
                        </div>
                    </div>
                    <div className="cartarea">
                        <Link to={"/cart"}>
                        <button className='cart-bt'>
                            <p>cart <sup className='cart-count'>{cart.length}</sup></p>
                        </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header