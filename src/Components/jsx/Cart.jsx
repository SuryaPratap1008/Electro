import React, { useEffect, useState } from "react";
import '../css/cart.css'
import axios from "axios";
import {Link} from 'react-router-dom'
// import Cart_quantity_mod from "./Cart_quantity_mod";
import CartTemplate from "./CartTemplate";
export default function Cart() {


  const [isDeleted,setIsDeleted] = useState(0)

  const [total, setTotal] = useState(0)
  const [data,setData] = useState(null)
  const [ready,setReady] = useState(null)
  useEffect(()=>{
    const fetchData = async ()=>{
      if (localStorage.getItem('token')){
        try {
          const token = localStorage.getItem('token')
          await axios.post('api/account/cart',{auth_token:token}).then((res)=>{
            setData(res.data.payload)
            setReady(res.data.success)
            let subtotal = 0
          res.data.payload.map((element)=>{
            const price = parseInt(element[0].price.replaceAll(",",""))
            const howMany = element[1].count
            const finalPrice = price*howMany
            subtotal+=finalPrice
          })
          console.log(subtotal)
          setTotal(subtotal)
          })
        } catch (error) {
          console.log(error)
        }
      }
      else{
        console.log("you are not signed in babay")
      }
    }
    fetchData()
  },[isDeleted])

  if(ready){
    console.log(data)
    return (
      <>
      <div id="cart-cont" className = "dimmed margin-top">
        <h1>SHOPING CART</h1>
        <div id="cart-content-cont">
  
        <div id="product-section" className="cart-sections">
          <h2>PRODUCTS</h2>
        <div id="product-content-cont">
        
        
      {data.map((element)=>{
     
        return(
         
        <CartTemplate isDeleted={isDeleted}  setIsDeleted={setIsDeleted}  proId = {element[0]._id} title = {element[0].title} price={element[0].price} img={element[0].img} count={element[1].count}></CartTemplate>

        
        )
      })}
  </div>
  
        </div>
        <div id="summary-section" className="cart-sections">
          <h2>ORDER SUMMARY</h2>
          <div id="cart-subtotal-cont">
            <span>Total</span>
            <span>-</span>
            <span>{`Rs. ${total}`}</span>

          </div>
          <button id="cart-checkout">CHECKOUT</button>
        </div>
        </div>
  
      </div>
      </>
    );
  }
  else{
    return (
      <div id="cart-cont-empty">

        <span>Please Login to access your cart</span>
        <Link
                  className="auth-link"
                  to="/login"
                >
                  <button>LogIn</button>
                </Link>
      </div>
      
    )
  }
}
