import React, { useEffect, useRef,useState } from 'react'
import "../css/login.css"
import {Link,useNavigate} from "react-router-dom"
import  axios from 'axios'

export default function Login(props) {
  const navigate = useNavigate()
    const [data,setData] = useState(null)
    const usernameRef = useRef(null)
    const passRef = useRef(null)
    async function onLogin(){

        

        const credentials  = {
            email: usernameRef.current.value,
            password:passRef.current.value
        }
        console.log(credentials.username)
       
      //  await axios.get('https://www.amazon.in/gp/product/B0CZS3B3PY/ref=ox_sc_act_title_3?smid=AQUYM0O99MFUT&psc=1').then((res)=>{console.log(res.body)})
        await  axios.post("auth/login",credentials).then((res)=>{
          if(res.data.success == true){
            localStorage.setItem("token",res.data.payload)
            navigate('/')
          }
          else{

          }
          }
        
        ).catch((err)=>{console.log("an error occured" + err.message)})
        

    }

    return (
    <>
      <div id="login-cont" className='dimmed'>
      <div id="login-logo-cont">
        <img src={require('../images/logo/electo-logo-s.png')} alt="" />

      </div>
        <div id="login-child-cont">
        <div className="credentials">
            <h3>Username : </h3>
            <input ref = {usernameRef} type="text"/>
            
        </div>
        <div className="credentials">
            <h3>Password : </h3>
            <input ref ={passRef} type="text"/>

        </div>
        <h4>By continuing, you agree to Electro's <Link className="login-Terms-links"  to ="/terms-of-use">Terms of Use</Link> and <Link className="login-Terms-links" to ="/privacy-policy">Privacy Policy</Link>.</h4>
        <button id="submit-login" onClick={onLogin}>Login</button>        
        </div>

      </div>

  
    </>
  )
}
