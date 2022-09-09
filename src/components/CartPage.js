import React, { useState } from 'react';
import { CartState } from '../Context';

const CartPage = () => {

    const { cart, setcart, product } = CartState();

    console.log(cart);

    return (
        <div style={{display:'flex', flexWrap:"wrap", padding:10, margin:10}}>
            {cart.map((cart) => {
                return (
                <div style={{display:'flex', flexDirection:'column', width:'20%', padding:10, margin:10, border: '1px solid black'}}>
                    <img src={cart.image}></img>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <span>{cart.name}</span>
                        <span><b>${cart.price}</b></span>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default CartPage;