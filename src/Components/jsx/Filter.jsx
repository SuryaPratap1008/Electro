import React, { useEffect, useRef, useState } from "react";
import "../css/Filter.css";
// import mongoConnect from "../backend/mongoConnect.mjs"
// const mongoose = require("mongoose")
export default function Filter(props) {
  const minRef = useRef(null);
  const maxRef = useRef(null);
  const minTextRef = useRef(null);
  const maxTextRef = useRef(null);
  const progressRef = useRef(null);
  const [minPrice, setMinPrice] = useState(1);
  const [maxPrice, setMaxPrice] = useState(500000);
  let minPriceRef = useRef(0);
  let maxPriceRef = useRef(0);
  // function sliderColorChange(){
  //   console.log(minRef.current.offsetLeft)

  // mongoConnect()

  // }
  function minChange() {
    //  sliderColorChange()
    if (minPrice <= maxPrice - 1 || maxPrice == 0) {
      setMinPrice(minRef.current.value);
      let x = minRef.current.offsetWidth;
      let percentage = (minPrice * 100) / 500000;
      let sliderOffLeft = (percentage * x) / 100;
      // console.log(percentage)
      console.log(sliderOffLeft);
      progressRef.current.style.left = sliderOffLeft + "px";
    }
  }
  function maxChange() {
    if (maxPrice >= minPrice + 1) {
      setMaxPrice(maxRef.current.value);
      let x = maxRef.current.offsetWidth;
      let percentage = (maxPrice * 100) / 500000;
      let left_over_percentage = 100 - percentage;
      let sliderOffRight = (left_over_percentage * x) / 100;
      console.log(left_over_percentage);
      console.log(sliderOffRight);
      progressRef.current.style.right = sliderOffRight + "px";
    }
  }
  function minTextChange() {
    console.log(minPrice);
    if (minPrice <= maxPrice - 1) {
      setMinPrice(minTextRef.current.value);
      minPriceRef = minTextRef.current.value;
      let x = minRef.current.offsetWidth;
      let percentage = (minPriceRef * 100) / 500000;
      let sliderOffLeft = (percentage * x) / 100;
      console.log(percentage);
      // console.log(sliderOffLeft)
      progressRef.current.style.left = sliderOffLeft + "px";
    } else alert("please choose a value less than maximum");
  }
  function maxTextChange() {
    if (maxPrice >= minPrice + 1 || maxPrice == 0) {
      setMaxPrice(maxTextRef.current.value);
      maxPriceRef = maxTextRef.current.value;
      let x = maxRef.current.offsetWidth;
      let percentage = (maxPriceRef * 100) / 500000;
      let left_over_percentage = 100 - percentage;
      let sliderOffRight = (left_over_percentage * x) / 100;
      console.log(left_over_percentage);
      console.log(sliderOffRight);
      progressRef.current.style.right = sliderOffRight + "px";
    }
  }

  return (
    <>
      <div id="filter-cont">
        <div id="current_filters">
          <h1>FILTERS</h1>
        </div>
        <div id="categories-filter" class="flexbox">
          <h2>CATEGORIES</h2>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
        </div>
        <div id="price-cont" class="flexbox">
          <h2>Price</h2>
          <div id="min-max-container">
            <div className="min-max-price-cont">
              <h3>MIN :</h3>
              <input
                type="number"
                name="min-price"
                id=""
                value={minPrice}
                ref={minTextRef}
                onChange={minTextChange}
              />
            </div>
            <div className="min-max-price-cont">
              <h3>MAX :</h3>
              <input
                type="number"
                name="max-price"
                id=""
                value={maxPrice}
                ref={maxTextRef}
                onChange={maxTextChange}
              />
            </div>
          </div>
          <div id="slider-parent-cont">
            <div className="progress" ref={progressRef}></div>
            <div id="slider-cont">
              <input
                type="range"
                min="1"
                max="500000"
                name=""
                id=""
                className="slider"
                value={minPrice}
                ref={minRef}
                onChange={minChange}
              />
              <input
                type="range"
                min="1"
                max="500000"
                name=""
                id=""
                className="slider"
                value={maxPrice}
                ref={maxRef}
                onChange={maxChange}
              />
            </div>
          </div>
        </div>

        <div id="brands-filter">
          <h2>BRANDS</h2>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
          <div className="category-sub-cont">
            <input type="checkbox" name="PHONES" id="" />
            <h3>Phones</h3>
          </div>
        </div>
      </div>
    </>
  );
}
