import React, { useContext, useState } from 'react'

import './Home.css';
import { useNavigate } from 'react-router-dom';
import CartContext from './Context';



const Home = () => {

    const {data, addItem} = useContext(CartContext)
    // const addItem = useContext(CartContext)

    

    // console.log(data)
    return (
        
        <div className='products'>
            {data?.map((item) =>
                <div className='cart'>
                    <div key={item.id}></div>
                    <div>
                        <img className='product-image' src={item.img} alt={item.name}></img>
                    </div>
                    <div>
                    <h3 className='product-name'>{item.name}</h3>
                    </div>
                    <div>
                        <div className='product-price'>Price:{item.price}</div>
                    </div>
                    <div>
                    <button onClick={()=>addItem(item)} className='product-add-button'>Add to cart</button>
                    </div>
                </div>

            )}
        </div>
    )
}
export default Home;

// function abc()
// {

// }
// export abc;