import React from "react";
import cart from "../../../backend/models/cart";

const Cart = () => {
    return (
      <div>
        <h1>Thank you for your order</h1>
        <p>Order details:</p>
        <p>{user.name}</p>
        <p>{cart.item}</p>
        <button>Check out</button>
      </div>
    );
  }
  export default Cart;
  