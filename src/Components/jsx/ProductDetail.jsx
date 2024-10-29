import React, { useEffect, useRef, useState } from "react";
import { NavLink, useSearchParams, Outlet, Link, redirect } from "react-router-dom";
import "../css/productDetail.css";
import StarRating from "./StarRating";
import { FaStar } from "react-icons/fa";
import MediaScroller1 from "./MediaScroller1";
import Cart_quantity_mod from "./Cart_quantity_mod";
import Pro_Description from "./Pro_Description";
import Pro_Shipping from "./Pro_Shipping";
import axios from "axios";
export default function ProductDetail(props) {
  const [detailTab, setDetailTab] = useState(1);
  console.log(detailTab);
  const [cartCount, setCartCount] = useState(1);
  const [data, setData] = useState(null);
  const [ready, setReady] = useState(false);
  const [params, setParams] = useSearchParams();
  const avgRating = "0";
  const stock = "In Stock";
  let pro_title = params.get("title");

  useEffect(() => {
    // console.log(typeof title)
    setReady(false);
    const fetchData = async () => {
      console.log(pro_title);
      const body = {
        title: pro_title,
        slurp: "toto",
      };
      console.log(body);
      await axios
        .get("api/products/fetch/details/det", { params: body })
        .then((res) => {
          setData(res.data.payload[0]);
          setReady(res.data.success);
          console.log(res.data);
        });
    };
    try {
      fetchData();
    } catch (error) {
      console.log(error);
    }
  }, [params.get("title")]);
  function pro_info(event) {}
  async function addToCart(count) {
    try {
      const token = localStorage.getItem("token");
      // const proId = props.pro_id
      // console.log(proId)

      const body = { auth_token: token, productId: data._id, count: count };
      console.log(body);
      await axios.post("api/addtocart", body).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (ready) {
    return (
      <>
        <div id="detail-parent-cont" className="dimmed margin-top">
          {/* <aside id="aside-section">
          {[...Array(25)].map((h, i) => {
            return <span>aslfkjsdfhidgsdlkfsdfsdig</span>;
          })}
        </aside> */}
          <div id="detail-cont">
            <div id="first-section-cont">
              <div id="left-section-cont">
                <img src={data.img} alt="" id="product-img" />
                
              </div>
              <div id="right-section-cont">
                <h1 id="product-title">{data.title}</h1>
                <div id="avgRating-cont" className="flex-row">
                  <StarRating
                    hover="off"
                    avgRating="0"
                    rating="off"
                  ></StarRating>
                  <span>
                    {avgRating != "0" ? avgRating : "Be the first one to rate"}
                  </span>
                </div>
                <div id="availability-cont" className="flex-row">
                  <span>Availability</span>
                  <span>:</span>
                  <span>{stock}</span>
                </div>
                <div id="price-cont" className="flex-row">
                  <span>Rs.</span>
                  <span id="price">{data.price}</span>
                  <span>(EXCLUDING GST)</span>
                </div>
                <div id="count-control">
                  <Cart_quantity_mod
                    setCartCount={setCartCount}
                    cartCount={cartCount}
                  ></Cart_quantity_mod>
                </div>
                <div id="subtotal-cont">
                  <div id="price-cont" className="flex-row">
                    <span>SUBTOTAL : </span>
                    <span>Rs.</span>
                    {(function () {
                      if (data.price.includes(",")) {
                        const stringPrice = data.price.replace(",", "");
                        const newPrice = parseInt(stringPrice);
                        const sumTotal = newPrice * cartCount;
                        return <span id="price">{sumTotal}</span>;
                      } else {
                        const newPrice = parseInt(data.price);
                        console.log("whidsdhf");
                        return <span id="price">{newPrice * cartCount}</span>;
                      }
                    })()}

                    <span></span>
                  </div>
                </div>
                <div id="action">
                  <button onClick={() => addToCart(cartCount)}>
                    ADD TO CART
                  </button>
                  <button>BUY NOW</button>
                </div>
              </div>
            </div>
            <MediaScroller1
              contID="show5"
              category="tv"
              message="this is the second one scrolling"
              disp="invisible"
              // url = "api/products/bestSelling"
              tag="none"
              title="TELEVISION"
            ></MediaScroller1>
            <div id="pro-info">
              <nav id="pro-info-nav">
                <ul>
                  <li
                    
                    
                    className="pro-info-nav-elem"
                    onClick={() => setDetailTab(1)}
                  >
                    DESCRIPTION
                  </li>
                  <li
                    
                    className="pro-info-nav-elem"
                    onClick={() => {
                      setDetailTab(2);

                    }}
                  >
                    SHIPPING+RETURNS
                  </li>
                  <li className="pro-info-nav-elem">
                    REVIEWS
                  </li>
                </ul>
              </nav>
              <div id="detail-nav">
                {(function () {
                  if (data.tech_details1) {
                    return (
                      <div className={detailTab === 1 ? "" : "invisible"}>
                        <Pro_Description
                          overview={data.details}
                          features={data.bullet_points}
                          techDetail1={data.tech_details1}
                          techDetail2={data.tech_details2}
                        ></Pro_Description>
                      </div>
                    );
                  } else {
                    return (
                      <div className={detailTab === 1 ? "" : "invisible"}>
                        <Pro_Description
                          overview={data.details}
                          features={data.bullet_points}
                        ></Pro_Description>
                      </div>
                    );
                  }
                })()}
                <div className={detailTab === 2 ? "" : "invisible"}>
                  <Pro_Shipping></Pro_Shipping>
                </div>
              </div>
            </div>
          </div>
        </div>
        <MediaScroller1
          contID="show5"
          category="phone"
          message="this is the second one scrolling"
          disp="invisible"
          // url = "api/products/bestSelling"
          tag="none"
          title="PHONES"
        ></MediaScroller1>
      </>
    );
  } else {
    return (
      <div id="loading-details">
        <span>we are doing it</span>
      </div>
    );
  }
}
