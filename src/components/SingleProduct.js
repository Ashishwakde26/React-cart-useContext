import React from 'react';
import { CartState } from '../Context';

const SingleProduct = () => {

    const { cart, setcart, product } = CartState();

    console.log(product);

    return (
        <div style={{padding:10, display:'flex', flexWrap:"wrap"}}>
            {product.map((prod) => {
                return (
                    <div style={{display:"flex", flexDirection:"column", width:'20%', padding:"20px", margin:"10px", border: "1px solid black"}}>
                       <img style={{objectFit:'cover'}} src={prod.image}></img>
                       <div style={{display:'flex', flexDirection:'row', justifyContent:"space-between", marginTop:10}}>
                            <span>
                                {prod.name}
                            </span>
                            <span>
                                <b>${prod.price}</b>
                            </span>
                       </div>
                        
                        {(cart.some((p) => p.id === prod.id)) ? 
                        <button onClick={() => setcart(cart.filter((p) => p.id !== prod.id))} style={{backgroundColor:"red", padding:5}}>Remove From Cart</button> :  
                        <button onClick={() => setcart([...cart, prod])} style={{backgroundColor:"green", padding:5}}>Add To Cart</button>
                        }
                        
                        
                    </div>
                )
            })}

        </div>
    )
}

export default SingleProduct;