import React from 'react';
import '../style/card.css'
import '../style/grid.css'

const Singlecard = ({ curElem, cart, setCart }) => {


    return (
        <>
            <div className="card" key={curElem.sn}>
                <div className="inner">
                    <div className="img-area">
                        <img className="img" src={curElem.imgs} alt="card" height="168.75px" />
                    </div>
                    <div className="details">
                        <div className="tg">
                            <span>{curElem.catagory}</span>
                        </div>
                        <div className="details-inner">
                            <h1>{curElem.name}</h1>
                            <div className="price">
                                {curElem.price}
                            </div>
                        </div>
                        <div className="order-now">

                            {
                                cart.includes(curElem) ? (
                                    <button className="bt r" onClick={() => {
                                        setCart(cart.filter((p) => p.sn !== curElem.sn))
                                    }}>
                                        remove from cart
                                    </button>
                                ) : (
                                    <button className="bt" onClick={() => {
                                        setCart([...cart, curElem])
                                    }}>
                                        Add to cart
                                    </button>
                                )
                            }


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Singlecard