import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./carousel";
import { Card, Toast, ToastBody, ToastHeader } from "reactstrap";

import "./landingPage.css";

const landingPage = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <div>
      <img
        alt=""
        src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1594319332/Phone%20Smart/pr-media-iuU2aZdzp_M-unsplash_c6xvww.jpg"
        id="heroImg"
      />
      <div className="services-icons-container">
        <Card className="repair-card">
          <i class="fas fa-toolbox"></i>
          <h4>Device Repair</h4>
        </Card>
        <Card className="mobile-plans-card">
          <i class="fas fa-mobile-alt"></i>
          <h4>Mobile Plans</h4>
        </Card>
        <Card className="buy-sell-trade-card">
          <i class="far fa-money-bill-alt"></i>
          <h4> Buy, Sell & Trade</h4>
        </Card>
      </div>
      <Card className="tagline-card">
        <p className="tagline">
          We specialize in fast, affordable repairs for electronic devices! We
          offer a buy, sell, and trade program with a great selection of
          accessories!
        </p>
      </Card>
      <Card className="whyContainer">
        <div className="whyList">
          <h4>Why Phone Smart?</h4>
          <ul>
            <li>Safe & Reliable</li>
            <li>Knowledgeable</li>
            <li>Fast & Reasonable</li>
          </ul>
        </div>

        <img
          alt=""
          src="https://res.cloudinary.com/drcgo7zqn/image/upload/v1594319318/Phone%20Smart/joel-rohland-C1r9pODhfQ4-unsplash_dedqou.jpg"
          className="whyImg"
        />
      </Card>
      <Card className="contactus-card">
        <h1 className="contact-head">
          <span>Contact Us</span>
        </h1>
      </Card>
      <div className="toast-container">
        <Toast>
          <ToastHeader>Cookville, TN</ToastHeader>
          <ToastBody>
            728 S Jefferson Ave, Suite 15 Cookeville, Tennessee 38501
          </ToastBody>
        </Toast>
        <Toast>
          <ToastHeader>Jamestown, TN</ToastHeader>
          <ToastBody>
            205 South Main Street Jamestown, Tennessee 38556
          </ToastBody>
        </Toast>
      </div>
      <div className="reviewContainer">
        <Carousel breakPoints={breakPoints}>
          <Item className="review-card">
            <i class="fas fa-quote-right"></i>
            "These guys are great! Knowledgeable, friendly, reasonable, and they
            work hard to make sure your needs are met! I highly recommend them!"
            -James Moody
          </Item>
          <Item className="review-card">
            <i class="fas fa-quote-right"></i>
            "Super friendly, fast, and great cases too. I took my iPhone 8 there
            with a terrible cracked screen and picked out a new case. An hour
            later I had my phone with the case on it. Awesome!!" -Adam Beaty
          </Item>
          <Item className="review-card">
            <i class="fas fa-quote-right"></i>
            "They are honest & capable. And their products are very reasonably
            priced…not like a typical cellular store." - Teresa Draughn
          </Item>
          <Item className="review-card">
            <i class="fas fa-quote-right"></i>
            "Always so helpful and friendly! I recommend them to everyone
            looking for phone plans & repairs!" - Kayla BethAnn Brown Voiles
          </Item>
          <Item className="review-card">
            <i class="fas fa-quote-right"></i>
            "Locally owned and operated. Great prices, repair phones, Great
            Customer service." - Raymond Phillips
          </Item>
          <Item className="review-card">
            <i class="fas fa-quote-right"></i>
            "They replaced my battery in my I phone 6 today very reasonable fast
            service very friendly and courteous if you need your I phone worked
            on please pay them a visit." - Jo Ann Brewington
          </Item>
        </Carousel>
      </div>
    </div>
  );
};

export default landingPage;
