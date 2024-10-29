import React, { forwardRef, useEffect, useRef, useState } from "react";
import ProductTemplate from "./ProductTemplate";
import "../css/ProductShowcase.css";
import axios from "axios";


const ProductShowcase = forwardRef(function ProductShowcase(props, showcase) {
  const [data, setData] = useState(null);
  const [ready, setReady] = useState(false);
  const [error, setError] = useState(null);




  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(props.url);
        console.log("productSHowcase have got the data")
        setData(response.data.payload);
        setReady(response.data.success);
        props.setIsShowcaseReady(props.isShowcaseReady + 1)
      } catch (error) {
        setError("Failed to fetch data.");
      }
    };

    fetchData();
  }, [props.url]); // Added props.url as a dependency to ensure useEffect runs when it changes.

  if (ready) {
    console.log(data)
    return (
      <>
        <div id="shocase-parent-cont" >
          <img
            className={"scroller-button " + props.disp}
            onClick={props.backwards}
            src={require("../images/icons/back-b.png")}
            alt=""
          />
          <div id="showcase-cont" ref={showcase}>
            {(() => {
              if (props.tag === "bestSelling" || props.tag === "newArrival") {
                return (
                  <>
                    {[...Array(Number(3))].map((_, i) => (
                      <>
                        {[...Array(data.length)].map((_, j) => {
                          const index = j + data.length * i;
                          return (
                            <ProductTemplate
                              key={`template-${index}`}
                              className="pro-templates"
                              pro_name={data[j].title}
                              pro_img={data[j].img}
                              pro_price={data[j].price}
                              pro_id={data[j]._id}
                            />
                          );
                        })}
                      </>
                    ))}
                  </>
                );
              } else {
                return (
                  <>
                    {[...Array(data.length)].map((_, j) => (
                      <ProductTemplate
                        key={`template-${j}`}
                        className="pro-templates"
                        pro_img={data[j].img}
                        pro_name={data[j].title}
                        pro_price={data[j].price}
                        pro_id={data[j]._id}
                      />
                    ))}
                  </>
                );
              }
            })()}
          </div>
          <img
            className={"scroller-button " + props.disp}
            onClick={props.forwards}
            src={require("../images/icons/forward-b.png")}
            alt=""
          />
        </div>
      </>
    );
  } else {
    console.log("The data is being fetched");
    return (
      <>
        <span>All is good</span>
      </>
    );
  }
});

// Uncomment if you want to set default props
// ProductShowcase.defaultProps = {
//   itemCount: 5,
//   groupCount: 4,
// };

export default ProductShowcase;
