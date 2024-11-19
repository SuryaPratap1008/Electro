import React, { useRef, useState, useEffect,createRef } from "react";
import ProductShowcase from "./ProductShowcase"; 
import "../css/ProductShowcase1.css";
import ReactDOM from 'react-dom/client';
import axios from "axios";


export default function MediaScroller1(props) {
   

    const  [brandUrl,setBrandUrl] = useState("")
    const [data,setData] = useState(null)
    const [ready,setReady] = useState(false)
    const currentToggle = useRef(0);
    const showcase = useRef(null);
    const [showcaseClientWidth,setClientWidth] = useState(1) 
    const [isShowcaseReady,setIsShowcaseReady] = useState(0)
    const [toggleCounts,setToggleCounts] = useState(1)
 
    const toggleRefs = [...Array(toggleCounts)].map(()=> {return createRef()})
    useEffect(()=>{
      const dataFetch = async ()=>{
        const url = `api/products/${props.category}/b/brands`
        axios.get(url).then((res)=>{
          setData(res.data.payload)
          setReady(res.data.success)
          setBrandUrl(`api/products/${props.category}/${res.data.payload[0]}`)
          
        })
      }
      try {
        dataFetch()
       
        
      } catch (error) {
        console.log(error)
      }
    },[])
    useEffect(()=>{
      if(showcase.current){

        setClientWidth(showcase.current.clientWidth)
        console.log("the current showcase is " + showcase.current)
        const toggleCounts = Math.ceil(showcase.current.scrollWidth/showcase.current.clientWidth)
        setToggleCounts(toggleCounts)
      }
      else{
        console.log("showcase not loadedd")
        console.log(isShowcaseReady)
      }
    },[isShowcaseReady])
 
    function forClick(ele) {
      if (currentToggle.current < toggleCounts-1) {
      toggleRefs[currentToggle.current + 1].current.animate(
        [
          { border: "0px", backgroundColor: "rgb(37, 37, 37)" },
          { border: "1px solid black", backgroundColor: "white" },
        ],
        { duration: 400, fill: "forwards", iterations: 1 }
      );
      toggleRefs[currentToggle.current].current.animate(
        [
          { border: "1px solid black", backgroundColor: "white" },
          { border: "0px", backgroundColor: "rgb(37, 37, 37)" },
        ],
        { duration: 400, fill: "forwards", iterations: 1 }
      );

      currentToggle.current += 1;
      showcase.current.scrollLeft += showcaseClientWidth;
      showcase.current.scrollBehavior = "smooth";
      ele.target.style.pointerEvents = "none";
      setTimeout(() => {
        ele.target.style.pointerEvents = "all";
      }, 500);
    }
  }

  function preClick(ele) {
    if (currentToggle.current > 0) {
      toggleRefs[currentToggle.current - 1].current.animate(
        [
          { border: "0px", backgroundColor: "rgb(37, 37, 37)" },
          { border: "1px solid black", backgroundColor: "white" },
        ],
        { duration: 400, fill: "forwards", iterations: 1 }
      );
      toggleRefs[currentToggle.current].current.animate(
        [
          { border: "1px solid black", backgroundColor: "white" },
          { border: "0px", backgroundColor: "rgb(37, 37, 37)" },
        ],
        { duration: 400, fill: "forwards", iterations: 1 }
      );
      currentToggle.current -= 1;
      showcase.current.scrollLeft -= showcaseClientWidth;
      showcase.current.scrollBehavior = "smooth";
      ele.target.style.pointerEvents = "none";
      setTimeout(() => {
        ele.target.style.pointerEvents = "all";
      }, 500);
    }
  }
  function toggleClick(key){
    console.log(console.log(key))
    const diff = key - currentToggle.current
    const scrollBy = diff*showcaseClientWidth
    toggleRefs[currentToggle.current].current.animate(
      [
        { border: "1px solid black", backgroundColor: "white" },
        { border: "0px", backgroundColor: "rgb(37, 37, 37)" },
      ],
      { duration: 400, fill: "forwards", iterations: 1 }
    );
    toggleRefs[key].current.animate(
      [
        { border: "0px", backgroundColor: "rgb(37, 37, 37)" },
        { border: "1px solid black", backgroundColor: "white" },
      ],
      { duration: 400, fill: "forwards", iterations: 1 }
    );
    currentToggle.current = key;
    showcase.current.scrollLeft += scrollBy;
    showcase.current.scrollBehavior = "smooth";
  }
 

async function optionsfetcher(event){
  const target = event.target
 
  const parent = target.parentNode
  const children = parent.children
  
  if(!target.classList.value.includes("isactive")){
    for(let i=0;i< children.length;i++){
      if (children[i].classList.value.includes("isactive")){
        children[i].classList.remove("isactive")
      }
    }
    target.classList.add("isactive")
    const brand = event.target.textContent.toLowerCase()
    const url =  `api/products/${props.category}/${brand}`
    setBrandUrl(url)
  //   const show_cont = document.getElementById(props.contID)
  //   show_cont.style.height = show_cont.offsetHeight.toString() + "px"
   
  //   console.log(url)
  //     show_cont.innerHTML = ""
  //     showcase.current = null
  //     const show = ReactDOM.createRoot(show_cont)
  //     show.render(
  //       <ProductShowcase
  //       tag = {props.tag}
  //       url = {url}
  //       isShowcaseReady={isShowcaseReady}
  //       setIsShowcaseReady={setIsShowcaseReady}
  //       ref ={showcase}
  //       forwards={forClick}
  //       backwards={preClick}
  //       disp={props.disp}
  //       ></ProductShowcase>
  //     )
  }
   
   

}

if(ready&&props.category){
 

  return (
    <>
      <div id="pri-cont" className="dimmed">
        <div id="ar-cont">
          <div id="ar-head-cont">
            <h2 id="ar-heading">{props.title}</h2>
          
            <ul className="showcase-options">
              {data.map((brand,i)=>{
                return(
                 <li onClick={optionsfetcher}  className="options">{brand.toUpperCase()}</li>
                )
              })}
            </ul>
          </div>
          <div id={props.contID}>
          <ProductShowcase
          isShowcaseReady={isShowcaseReady}
          setIsShowcaseReady={setIsShowcaseReady}
            tag = {props.tag}
            url = {brandUrl}
            ref = {showcase}
            forwards={forClick}
            backwards={preClick}
            disp={props.disp}
            
          ></ProductShowcase>
          </div>
          <ul id="toggle">
            
             <button onClick={()=>{toggleClick(0)}} key = "0" style = {{ border: "1px solid black", backgroundColor: "white" }} ref={toggleRefs[0]}></button>

           {[...Array(toggleCounts-1)].map((element,index)=>{
           
              return(
                <button onClick={()=>{toggleClick(index+1)}} key={`${index}+1`} ref ={toggleRefs[index+1]}></button>
              )
            
           })}
        
          </ul>
          
         
        </div>
      </div>
    </>
  );

}
else{
  return(
    <>
    <span>data is being fetched</span>
    </>
  )
}
}
