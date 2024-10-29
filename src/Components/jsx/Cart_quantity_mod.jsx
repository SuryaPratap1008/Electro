import React, { useRef, useState,useEffect } from 'react'
import '../css/cart_quantity_mod.css'
export default function Cart_quantity_mod(props) {
    
    const [quantity,setQuantity] = useState(1)
    const inputRef = useRef(null)
    useEffect(()=>{
    
      props.setCartCount(quantity)

    },[quantity])
    useEffect(()=>{
      if(props.userdata){
        console.log("the userdata has been recienved by the cartQuantity mod")
        setQuantity(props.userdata)
      }
    },[props.userdata])
const stockValue = 23;
  return (

                
               
                <div id="quan-controller" className="flex-row dimmed">
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      if (quantity > 0) {
                        setQuantity(quantity - 1);
                        const newValue = Number(inputRef.current.value) - 1;
                        inputRef.current.value = newValue;
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    ref={inputRef}
                    type="text"
                    inputMode='numeric'
                    pattern='[0-9]+'
                    id="quantity"
                    value={quantity}
                    onChange={(event) => {
                      setQuantity(Number(event.target.value));
                    }}
                  />
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      if (quantity < stockValue) {
                        setQuantity(quantity  + 1);
                        // const newValue = Number(inputRef.current.value) + 1;
                        // inputRef.current.value = newValue;
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              
  )
}
