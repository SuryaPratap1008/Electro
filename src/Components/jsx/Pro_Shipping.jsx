import React from "react";
import '../css/proShipping.css'
export default function Pro_Shipping() {
  return (
    <>
      <div id="shipping-info-cont">
        <div id="return-cont">
          <h2>RETURN POLICY</h2>
          <span>
            Due to the type of products we sell, we accept limited returns.
            Below are the conditions where we can accept a return request.
          </span>
          <div id="return-cont-divs">
            <h4>1. Damaged During Shipment</h4>
            <span>
              If you receive a product damaged during shipment, please notify us
              within the 3 days of you receive the product, supported by the
              proper pictures and description. Once our support team accept the
              return, we will provide a replacement or a complete refund
              including the return shipping cost.
            </span>
          </div>
          <div id="return-cont-divs">
            <h4>2. Wrong Item Shipped</h4>
            <span>
              If your item looks different from what is shown in the image on
              our website, we will take the item back and provide a refund or
              replacement as per your choice.
            </span>
          </div>
          <div id="return-cont-divs">
            <h4>Limitation of Returns</h4>
            <span>
              We don't accept the returns for the products damanged by improper
              use of the product. Moreover we don't accept the return, if the
              ordered product is not fit for any specific application. Please
              read the product specifications and datasheet before selecting and
              ordering a product. Returns are accepted only with 3 days from the
              date of delivery.
            </span>
          </div>
        </div>
        <div id="shipping-cont">
          <h2>SHIPPING</h2>
          <span>
            We ship to all over India with free shipping on all prepaid orders
            above 500. For Cash on Delivery orders INR 80 will be charged for
            orders below INR 599 and INR 30 will be charged for the orders above
            599. Please contact to our support team at
            support@quartzcomponents.com for any question related to shipping.
          </span>
        </div>
      </div>
    </>
  );
}
