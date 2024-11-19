import React, { useState } from "react";
import "../css/faqs.css";
export default function Faqs() {
  const [current, setCurrent] = useState(null);
  const questions = [
    "Do I need to create an account to place an order?",
    "Do we ship internationally?",
    "What are the shipping charges?",
    "When will my order get shipped?",
    "When will my shipment be delivered?",
    "Where is my order being shipped from?",
    "I just placed an order, can I modify or cancel it?",
    "How can I track my Order?",
    "Can I get invoice?",
    "How to use discount coupon for an order?",
    "I have a different question.",
  ];

  const answers = [
    "Signing up for the account is not mandatory to place an order and you can place the order as a Guest. However creating an account makes it easier to check the order status, and also keeps you updated with our new offers and promotions.",
    "At this moment we only ship within India.",
    "Orders below INR 599 are charged at flat shipping fees of INR 45 for all across India. All the orders above INR 599 are eligible for free shipping.",
    "Orders placed before 6.00PM are shipped on the same day.Orders that are placed after 6PM are shipped the next day.",
    "Generally shipments are delivered to the customers within 2-4 days depending on the shipping location.",
    "All the orders are shipped from Quartz Components warehouse in Jaipur.",
    "If you want to modify or cancel an order, please call or Whatsapp to (+91) 90792-59794. You can also write an email to support@quartzcomponents.com. If you order has already been shipped, you have to place a return request.",
    "You will receive a shipment notification with tracking number on your email or phone as soon as we ship your package. You can conveniently track the shipment by clicking the link provided in the email. Also you can track the shipment by logging in to the website.",
    "The invoice will be shipped along with products. You can also download a digital copy from My Order Page on quartzcomponents.com.",
    "Write or paste the coupon code in the discount code field on checkout page.",
    "You can contact us through Contact Us page, or call us on the phone (+91) 90792-59794 between Mon-Fri 10AM to 6PM. You can also write your queries to support@quartzcomponents.com",
  ];
  function faqsExpand(event) {
    let parent = event.target.parentNode
    let area = parent.lastChild
    console.log("hello")
    console.log(parent)
    console.log(area)
  }
  return (
    <div id="wrapper">
      <h1>FREQUENTLY ASKED QUESTIONS</h1>
      <span>Here are some of our most asked asked questions</span>
      <div id="faqs-content-cont">
        {questions.map((element, index) => {
          return (
            <div
              className="faqs-content-divs"
              key={`div${element}`}
              
            >
              <div className="faqs-content-divs-header" onClick={
                ()=>{setCurrent(index)}
              }>
                <div className="faqs-content-divs-section1">
                  <span className="question-tag">Questions</span>
                  <span className="questions">{questions[index]}</span>
                </div>
                {/* <img src={require("../images/icons/back-b.png")} alt="" /> */}
              </div>
              <div
                className={`  ${
                  current === index ? "" : "invisible"
                } faqs-answer-cont`}
              >
                <span className="answer-tag">Answer</span>
                <span className="answers">
                 {answers[index]}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
