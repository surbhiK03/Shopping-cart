import React, { useEffect, useState } from "react";
import { useContext } from "react";
import CartContext from "./Context";

const Cart = () => {
  let { cartItems, setCartItems } = useContext(CartContext);

  const [total, setTotal] = useState();
  const [Quantity, setQuantity] = useState(0);
  // console.log(cartItems);

  let Decrease = (cart_id) => {
    // console.log(cart_id);

    // setQuantity(Quantity =>
    // cartItems?.map((item) => {
    //   if(cart_id === item.id && item.quatity > 0){
    //     let newObj = {
    //       quatity: item.quatity-= 1,
    //       ...item,
    //     }
    //     console.log(newObj);
    //    }
    //   }
    // setCartItems(cartItems.filter(item => item.id !== cart_id));
    setCartItems(
      cartItems.map((item) =>
        cart_id === item.id
          ? {
              ...item,
              quatity: item.quatity - (item.quatity >= 1 ? 1 : 0),
              total: item.total - item.price,
            }
          : item
      )
    );
  };

  let increase = (cart_id) => {
    // console.log(cart_id);
    setCartItems(
      cartItems.map((item) =>
        cart_id === item.id
          ? {
              ...item,
              quatity: (item.quatity += 1),
              total: item.quatity * item.price,
            }
          : item
      )
    );
  };

  let remove = (id) => {
    console.log(id);
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  let add = () => {
    // setCartItems(
    //   cartItems.reduce((acc, val) => {
    //     // return acc + val.price
    //     console.log(acc,val.price)
    //   },0)
    // );
  };

  useEffect(() => {
     let totalValue = cartItems.reduce((pre, val) => {
      console.log(pre, val.total)
      // console.log(pre+ val)
    //  setTotal(item.total+)    
      return pre + val.total;
    },0);
    setTotal(totalValue);
  }, [cartItems]);

  return (
    <div>
      <h1>Total:{total}</h1>
      {cartItems?.map((item) => (
        <div key={item.id}>
          <hr />
          <h1>{item.name}</h1>
          <div>
            <img className="product-image" src={item.img} alt={item.name}></img>
            <h4>Price:{item.price}</h4>
          </div>
          <button
            onClick={() => Decrease(item.id)}
            className="btn btn-dark mt-4"
          >
            <b>-</b>
          </button>
          <p>Quantity:{item.quatity}</p>
          <p>total:{item.total}</p>
          <button
            onClick={() => increase(item.id)}
            className="btn btn-dark mt-4"
          >
            <b>+</b>
          </button>
          &nbsp;&nbsp;
          <button onClick={() => remove(item.id)} className="btn btn-danger">
            Remove item
          </button>
          &nbsp;&nbsp;
          {/* <button onClick={() => add()} className="btn btn-dark">
            Add
          </button> */}
          &nbsp;&nbsp;
          <hr />
        </div>
      ))}
    </div>
  );
};
export default Cart;
