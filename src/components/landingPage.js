import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./carousel";
import { Card } from "reactstrap";

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
      <div className="reviewContainer">
        <Carousel breakPoints={breakPoints}>
          <Item>
            These guys are great! Knowledgeable, friendly, reasonable, and they
            work hard to make sure your needs are met! I highly recommend them!
            -James Moody
          </Item>
          <Item>
            Super friendly, fast, and great cases too. I took my iPhone 8 there
            with a terrible cracked screen and picked out a new case. An hour
            later I had my phone with the case on it. Awesome!! -Adam Beaty
          </Item>
          <Item>
            They are honest & capable. And their products are very reasonably
            priced…not like a typical cellular store. - Teresa Draughn
          </Item>
          <Item>
            Always so helpful and friendly! I recommend them to everyone looking
            for phone plans & repairs! - Kayla BethAnn Brown Voiles
          </Item>
          <Item>
            Locally owned and operated. Great prices, repair phones, Great
            Customer service - Raymond Phillips
          </Item>
          <Item>
            They replaced my battery in my I phone 6 today very reasonable fast
            service very friendly and courteous if you need your I phone worked
            on please pay them a visit. - Jo Ann Brewington
          </Item>
        </Carousel>
      </div>
    </div>
  );
};

export default landingPage;
