import React, { useState } from "react";
import "../css/cartTemplate.css";
import Cart_quantity_mod from "./Cart_quantity_mod";
import axios from "axios";
export default function CartTemplate(props) {
  const [cartCount, setCartCount] = useState(null);
  async function update() {
    console.log(cartCount);
    const token = localStorage.getItem("token");
    const body = {
      auth_token: token,
      count: cartCount,
      productId: props.proId,
    };
    await axios.post("api/account/cart/update-cart", body).then((res) => {
      console.log(res.data.success);
    });
    props.setIsDeleted(props.isDeleted + 1);
  }
  async function del() {
    console.log(props.title);
    console.log(props.proId);
    const token = localStorage.getItem("token");
    const body = { auth_token: token, productId: props.proId };
    await axios.post("api/account/cart/delete-cart", body).then((res) => {
      console.log(res.data.success);
    });
    props.setIsDeleted(props.isDeleted + 1);
  }

  return (
    <div className="cart-template">
      <div className="cart-template-img">
        <img src={props.img} alt="" />
      </div>
      <div className="cart-template-right">
        <div className="cart-template-title-price">
          <span className="cart-template-title">{props.title}</span>
          <span className="cart-template-price">Rs. {props.price}</span>
        </div>
        <div className="cart-template-update-remove">
          <div className="quant-mod-cont">
            <Cart_quantity_mod
              userdata={props.count}
              cartCount={cartCount}
              setCartCount={setCartCount}
            ></Cart_quantity_mod>
          </div>
          <button onClick={update} className="update-cart cart-action">
            UPDATE
          </button>
          <button onClick={del} className="remove-cart cart-action">
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
}
