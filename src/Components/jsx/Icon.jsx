import React from "react";
import "../css/icon.css";
export default function Icon(props) {
  return (
    <>
      <div className="merch-ic-box">
        <div className="merch-ic-cont">
          <img src={props.icon} alt="" className="merch-icon" />
        </div>
        <h3 className="merchn">{props.merchn}</h3>
      </div>
    </>
  );
}
