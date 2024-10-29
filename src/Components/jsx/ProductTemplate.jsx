import React, { useEffect, useRef,useState } from "react";
import "../css/productTemplate.css";
import axios from "axios";
import { Link } from "react-router-dom";
export default function ProductTemplate(props) {
  const templateRef = useRef(null);
  const [proId,setProId] = useState(null)
  useEffect(() => {
    setProId(props.pro_id)
    // console.log(props.pro_id)
    templateRef.current.style.width = props.width;
    // console.log(props.width)
  }, []);
 async function addToCart(count) {
    try{
      const token = localStorage.getItem("token")
      // const proId = props.pro_id
      console.log(proId)
      
      const body  = {auth_token:token,productId:props.pro_id,count:count} 
      console.log(body)
      await axios.post("api/addtocart", body).then((res) => {
        console.log(res.data);
      })
    }
    catch (error){
      console.log(error)
    }
  }
  return (

    
  <div className="template-cont" ref={templateRef}>
    <Link to = {`/detail?title=${props.pro_name}`} >
      <div className="pro-img-name-cont">
        <div className="pro-img-cont">
          <img src={props.pro_img} alt="" className="product-img" />
        </div>
        <h5 className="product-name">{props.pro_name}</h5>
      </div>
      </Link>
      <div className="pro-price-cart-cont">
        <h4 className="product-price">{`RS. ${props.pro_price}`}</h4>
        <button onClick={()=>addToCart(1)} className="addtocart">ADD TO CART</button>
      </div>
    </div>
    
  );
}
