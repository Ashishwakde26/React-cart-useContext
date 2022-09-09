import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

    return (
        <div>
            <span class='header'>React context API</span>

            <ul class='nav'>
                   <li>
                   <Link to='/'>Home</Link>         
                   </li> 
                         
                   <li>
                   <Link to='/cart'>Cart</Link>
                   </li> 
            </ul>
        </div>
    )
}

export default Header;