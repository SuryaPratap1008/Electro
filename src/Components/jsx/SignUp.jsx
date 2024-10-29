import React, { useRef, useState } from "react";
import {useNavigate } from "react-router-dom";
import "../css/signup.css";
import axios from "axios";
export default function SignUp() {
  const navigate =useNavigate()
  const firstName = useRef(null);
  const lastName = useRef(null);
  const phone = useRef(null);
  const email = useRef(null);
  const newPassword = useRef(null);
  const confirmPassword = useRef(null);
  const signupData = [
    firstName,
    lastName,
    phone,
    email,
    newPassword,
    confirmPassword,
  ];
  const signupCount = useRef(0);
  async function signUp(event) 
  { event.preventDefault()
    signupCount.current += 1;
    console.log(signupCount.current)
    
    // console.log(document.getElementsByClassName("yabawo"));
    let check1 = true;
    let check2 = true;
    
      signupData.forEach((element, index) => {
        const value = element.current.value.trim();
        console.log(element.current)
        if (value == "") {
          if (!element.current.nextElementSibling) {
            console.log(lastName.current.nextElementSibling)
            // console.log(document.getElementsByClassName("error-message"))
            const errorSpan = document.createElement("span");
            errorSpan.className = "error-message";
            errorSpan.innerText = "this field cannot be empty";
            element.current.parentNode.appendChild(errorSpan);
            check1 = false;
          }
          else{
            check1 =false
          }
        }
  });
    if( confirmPassword.current.style.border=="2px solid green"){
      check2=true
    }
    else{
      check2=false
    }
    // console.log(check);

    if (check1 == true&&check2==true) {
      const data = {
        firstName: firstName.current.value,
        lastName: lastName.current.value,
        phone: phone.current.value,
        email: email.current.value,
        password: newPassword.current.value,
        cart:[],
        address:[],
        orders:[]
      };
      console.log(data);

      // const data = {username:username.current.value.toString(),password:password.current.value.toString()}
      // console.log(data)
      await axios
        .post("auth/signup", data)
        .then((res) => {
          console.log(res.data.token)
          console.log(res.data)
          if(res.data.success==false){
            alert("A user with this email already exists, please use a different email")
          }

          else if(res.data=="invalidEmail"){
            alert("please enter a valid email")
            // localStorage.setItem("token", res.data.token);

          }
          else{
            localStorage.setItem("token",res.data.token)
            navigate('/')

          }
        })
        .catch((err) => {
          console.log(err);
        });
      // const token = await fetch('auth/signup',{method:"post",body:data})
      // console.log(token)
    }
  }
  function err_msg_rmv(event){
    if (event.target.nextElementSibling){
      event.target.nextElementSibling.remove()
    }
  }
  function passMatch(event){
    if (event.target.nextElementSibling){
      event.target.nextElementSibling.remove()
    }
    else{
      if(confirmPassword.current.value==newPassword.current.value){
        confirmPassword.current.style.border="2px solid green"
      }
      else{
        confirmPassword.current.style.border="2px solid red"
      }
    }
  }

  return (
    <>
      <div id="sign-up-cont" className="dimmed margin-top">
        <div id="sign-up-logo-cont">
          <img src={require('../images/logo/electo-logo-s.png')} alt="" />
        </div>
        <form action="" id="signup-form">
          <label>
            <span>First Name</span>
            <input type="text" ref={firstName} onChange={err_msg_rmv} name="firstName" id="" />
          </label>
          <label>
            <span>Last Name</span>
            <input type="text" ref={lastName} onChange={err_msg_rmv} name="lastName" id="" />
          </label>
          <label>
            <span>Phone Number</span>
            <input type="number" ref={phone} onChange={err_msg_rmv} name="email" id="" />
          </label>
          <label>
            <span>Email Address</span>
            <input type="email" ref={email} onChange={err_msg_rmv} name="email" id="" />
          </label>
          <label>
            <span>New Password</span>
            <input type="Password" ref={newPassword} onChange={err_msg_rmv} name="newPassword" id="" />
          </label>
          <label>
            <span>Confirm Password</span>
            <input
              type="password"
              onChange={passMatch}
              ref={confirmPassword}
              name="confirmPassword"
              id=""
            />
          </label>
       <button onClick={signUp} type="submit" id="submit-signup">
          Submit
        </button>
        </form>
        
      </div>
    </>
  );
}
