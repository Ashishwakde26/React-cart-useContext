import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import faker from 'faker';
import { useContext } from 'react';

const Cart = createContext();

const productArray = [...Array(20)].map((p) => ({
    id: faker.datatype.uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.random.image(),
}))



const Context = ({children}) => {

    const [product]= useState(productArray);

    console.log(product);

    const [ cart, setcart ] = useState([]);

    return (
        <Cart.Provider value={{cart, setcart, product}}>
            {children}
        </Cart.Provider>
    )
}

export const CartState = () => {
    return useContext(Cart);
}

export default Context;