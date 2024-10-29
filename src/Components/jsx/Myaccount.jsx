import React, { useEffect, useState, useRef } from "react";
import "../css/myaccount.css";
import axios from "axios";

export default function Myaccount() {
  const addressRef = useRef(null);
  const [data, setData] = useState(null);
  const [ready, setReady] = useState(false);
  const house = useRef(null)
  const city = useRef(null)
  const colony = useRef(null)
  const state = useRef(null)
  
  function createAddress(event) {
    
    // Adding the Add-address container to the body and styling it
    document.body.style.overflow = "hidden"
    const addd = document.getElementById("add-address-cont");
    console.log(addd)
    console.log(addd.style.display)
    addd.style.display = "block"

    
    const scrollHeight = window.scrollY
    const bodyHeight = window.innerHeight
    const adddHeight = addd.clientHeight
    const adddWidth = addd.clientWidth
    addd.style.visibility = "visible"
    console.log(bodyHeight)
    console.log(scrollHeight)
    console.log("the client width is " + adddWidth)
    console.log("the client height is" + adddHeight)
    const top = (bodyHeight-adddHeight)/2 + scrollHeight
    if (document.body.clientWidth>450){
      const left = (document.body.clientWidth-adddWidth)/2
      console.log('the top is ' +top)
      console.log('the left is ' +left)
  
    
      addd.style.top = `${top}px`
      addd.style.left = `${left}px`

    }
    else{
       addd.style.top = `${top}px`
      addd.style.left = "0px"
    }
    
    addd.animate([
      {opacity:"0%"},
      {opacity:"100%"},
      
    ],{duration:200,fill:"forwards",iteration:1})
    const overlay = document.createElement('div')
 
   
    // Adding the gray overlay to blue background
    overlay.id = "overlay"
    overlay.style.backgroundColor = "grey"
    overlay.style.opacity = "50%"
    overlay.style.zIndex = 1
    overlay.style.position = "absolute"
    overlay.style.top = "0px"
    overlay.style.width = "100vw"
    overlay.style.height = `${document.body.scrollHeight}px`
    document.body.appendChild(overlay)

    // Adding the onclick addEventListener to the overlay
    overlay.addEventListener('click',(ev)=>{
      const add = document.getElementById('add-address-cont')
      add.animate([
        {opacity:"100%"},
        {opacity:"0%" }
      ],{duration:100,fill:"forwards",iterations:1})
      
      setTimeout(() => {
        add.style.display = "none";
        add.style.top = "0px"
        add.style.left = "0px"
        document.body.removeChild(ev.target);
        document.body.style.overflow = "auto";
      }, 100);
    
   
    })
 
    
   

    // const addd = document.getElementById("no-data");
    // form_cont.placeholder = "Enter your address here";
    // form_cont.type = "text";
    // form_cont.id = "add-address";
    // form_cont.style.width = "100%";
    // form_cont.style.height = "50px";
    // submit.innerText = "Add";
    // submit.addEventListener("click", (event) => {
    //   const address = document.getElementById("add-address").value;
    //   const token = localStorage.getItem("token");
    //   console.log(token);
    //   console.log(address);
    //   const data = { auth_token: token, address: address };
    //   console.log(data);
    //   axios.post("api/account/add-address", data).then((res) => {
    //     console.log(res.data);
    //   });
    // });
    // addd.appendChild(form_cont);
    // addd.appendChild(submit);
  }
  function sumbitAddress(event){
    const house_no = house.current.value
    const city_no = city.current.value
    const colony_no = colony.current.value
    const state_no = state.current.value
    const address = house_no +','+city_no+','+colony_no+','+state_no
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(address);
    const data = { auth_token: token, address: address };
    console.log(data);
    axios.post("api/account/add-address", data).then((res) => {
        console.log(res.data);
      });
    
  }
  useEffect(() => {
   
    // console.log(token)
    const getUserData = async (token) => {
      await axios.post("api/account", { auth_token: token }).then((res) => {
        setData(res.data.payload);
        setReady(true);
      });
    };
    try {
      const token = localStorage.getItem("token").toString();
      getUserData(token);
      
    } catch (error) {
      console.log(error)
    }

    // console.log(data)
  }, []);

  function cancelAddAddress(event){
    const add = document.getElementById('add-address-cont')
    const overlay = document.getElementById("overlay")
    add.animate([
      {opacity:"100%"},
      {opacity:"0%" }
    ],{duration:100,fill:"forwards",iterations:1})
    document.body.removeChild(overlay);
    document.body.style.overflow = "auto";
    
    setTimeout(() => {
      add.style.display = "none";
      add.style.top = "0px"
      add.style.left = "0px"
    }, 100);
  }
  if (ready) {
    return (
      <>
<div id="add-address-cont" className="dimmed">
        <div id="sign-up-logo-cont">
          <img src={require('../images/logo/electo-logo-s.png')} alt="" />
        </div>
        <form action="" id="add-address-form">
          <label>
            <span>Building/House/Floor No.</span>
            <input type="text" ref={house}  name="house" id="" />
          </label>
          <label>
            <span>Colony</span>
            <input type="text" ref={colony}  name="colony" id="" />
          </label>
          <label>
            <span>City</span>
            <input type="number" ref={city}  name="city" id="" />
          </label>
          <label>
            <span>State</span>
            <input type="email" ref={state}  name="state" id="" />
          </label>
         <div id="add-address-buttons">

       <button  type="submit" id="submit-signup" onClick={sumbitAddress}>
          Submit
        </button>
       <button  type="submit" id="submit-signup" onClick={cancelAddAddress}>
          Cancel
        </button>
         </div>
        </form>
        
      </div>
        <div id="myaccount-cont" className="dimmed margin-top">
          <h1>MY ACCOUNT</h1>
          <div id="profile">
            <h2 className="myaccount-headings">PROFILE</h2>
            <div id="profile-info" className="myaccount-content-cont">
              <div className="info-box">
                <span>First Name</span>
                <span>{data.firstName}</span>
              </div>
              <div className="info-box">
                <span>Last Name</span>
                <span>{data.lastName}</span>
              </div>
              <div className="info-box">
                <span>Email Address</span>
                <span>{data.email}</span>
              </div>
              <div className="info-box">
                <span>Phone</span>
                <span>{data.phone}</span>
              </div>
            </div>
          </div>

          <div id="orderHistory">
            <h2 className="myaccount-headings">ORDER HISTORY</h2>
            <div
              className={`myaccount-content-cont  ${
                data.orders.length === 0 ? "no-data" : ""
              }`}
            >
              {(() => {
                if (data.orders.length == 0) {
                  return (
                    <div className="no-data">
                      <span>You have not purchased anything from us yet.</span>
                      {/* <button>+ Create One</button> */}
                    </div>
                  );
                } else {
                  return <span>all is good</span>;
                }
              })()}
            </div>
          </div>
          <div id="addresses">
            <h2 className="myaccount-headings">ADDRESSES</h2>
            <div
              id="addresses-info"
              ref={addressRef}
              className={`myaccount-content-cont  ${
                data.address.length === 0 ? "no-data" : ""
              }`}
            >
              {(() => {
                if (data.address.length == 0) {
                  return (
                    <div className="no-data">
                      <span>
                        You have not add any addresses, please add some
                      </span>
                      <button id="createAddressbtn" onClick={createAddress}>+ CREATE ONE</button>
                    </div>
                  );
                }

                return(
                 <>
                 { data.address.map((address, index) => {
                  return (
                    <div className="info-box">
                      <span>{`Address${index + 1}`}</span>
                      <span>{address}</span>
                    </div>
                  )
                })}
                 <button id="createAddressbtn" onClick={createAddress}>+ CREATE ONE</button>
              </>)
              })()}
            </div>
          </div>
          <div id="paymentMethods">
            <h2 className="myaccount-headings">PAYMENT METHODS</h2>
            <div className="paymentMethods"></div>
          </div>
        </div>
      </>
    );
  } else {
    return <span>Please login first to see your credentials</span>;
  }
}
