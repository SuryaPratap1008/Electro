import React, { useEffect, useState } from 'react'
// import 

export default function Pro_Description(props) {
  
    const [techDetail1_keys,setTechDetail1_keys] =useState([])
    const [techDetail2_keys,setTechDetail2_keys] =useState([])
 useEffect(()=>{
   if(props.techDetail1){
   
  setTechDetail1_keys(Object.keys(props.techDetail1))
  setTechDetail2_keys(Object.keys(props.techDetail1))
  
 }

 },[])

  return (
<div id="pro-description-cont" className="dimmed">
              <span>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
                voluptatum molestias totam velit? Facere recusandae maxime
                veniam rerum omnis reprehenderit, accusamus eligendi! Debitis,
                fugiat perferendis! Fugit provident quo aut incidunt doloremque,
                tempora quos optio deleniti aspernatur, magni repellat
                cupiditate atque. Officiis animi esse dicta voluptate quam
                debitis libero! Odit fuga perspiciatis error? Possimus
                veritatis, exercitationem repellat ad asperiores delectus odio
                tenetur! Sint, sunt, cupiditate praesentium quaerat rerum illo
                officiis magnam optio nisi doloribus voluptatem inventore ea
                cumque iusto voluptas culpa dicta, fugit quod. Nostrum quis
                quaerat amet incidunt excepturi. Ea reprehenderit molestiae
                commodi voluptates perspiciatis at facere, itaque non nostrum!
              </span>
            <div id="pro-overview-cont">
              <h2>FEATURES</h2>
              <ul id="overviews">
              {props.features.map((para, index) => {
                return (
                  <li>
                    {para}
                  </li>
                );
              })}
              </ul>
            </div>
         {(function(){
          if(props.techDetail1||props.techDetail2){
            return(
            <>
            <div id="pro-technical-detail-cont">
              <h2>TECHNICAL DETAILS</h2>
              <div id="details">

              {(function(){
                if(props.techDetail1){
                  return(
                    <>
                                  <div id="technical-detail1">
                <table>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Value</th>
                    </tr>

                  </thead>
                  <tbody>
                    {techDetail1_keys.map((element,index)=>{
                      if(!(props.techDetail1[element]=="")){

                        return(
                      <tr>
                        <td>{element}</td>
                        <td>{props.techDetail1[element]}</td>
                      </tr>
  
                        )
                      }
                    })

                    }
                   
                  </tbody>
                </table>
              </div>
                    </>
                  )
                }
              })()}
              
             { (function(){
              if(props.techDetail2){
                return(
                  <>

              <div id="technical-detail2">
              <table>
                  <thead>
                    <tr>
                      <th>Parameter</th>
                      <th>Value</th>
                    </tr>

                  </thead>
                  <tbody>
                  {techDetail2_keys.map((element,index)=>{
                    if(props.techDetail2[element]){

                      return(
                    <tr>
                      <td>{element}</td>
                      <td>{props.techDetail2[element]}</td>
                    </tr>

                      )
                    }
                    })

                    }
                  </tbody>
                </table>
              </div>
                  </>
                )
                }}
              )()}
              </div>
            </div>
            </>
            )
          }
         })()}
            
           

            </div>
  )
}
