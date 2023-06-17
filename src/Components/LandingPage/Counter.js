/* eslint-disable jsx-a11y/img-redundant-alt */

import React from 'react';
import { useEffect, useState } from "react";
import './counter.css';
import client from './client.gif';
import property from './property.gif';
import agent from './agent.gif';
import support from './support.gif';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [counter5, setCounter5] = useState(0);

  useEffect(() => {

    if (counter < 1600) {
      setTimeout(() => setCounter(counter + 1), 100);

    }
    if (counter2 < 15000) {
      setTimeout(() => setCounter2(counter2 + 1), 10);

    }
    if (counter3 < 450) {
      setTimeout(() => setCounter3(counter3 + 1), 1000);

    }
    if (counter4 < 24) {
      setTimeout(() => setCounter4(counter4 + 1), 1000);

    }
    if (counter5 < 7) {
      setTimeout(() => setCounter5(counter5 + 1), 1000);

    }

  }, [counter, counter2, counter3, counter4, counter5]);



  return (
    <div>
      <div class="page1-container">
        <div class="page1-stats">
          <div class="page1-stat">
            <h1 class="page1-text">
              <span>{counter}</span>
              <span>+</span>
            </h1>
            <span class="page1-text03"><span>HAPPY CLIENTS</span></span>
          </div>
          <div class="page1-stat1">
            <h1 class="page1-text05"><span>{counter2}</span></h1>
            <span class="page1-text07">PROPERTIES</span>
            <img
              src={property}
              alt="image"
              class="page1-image"
            />
          </div>
          <div class="page1-stat2">
            <h1 class="page1-text08">
              <span>{counter3}</span>
              <span>+</span>
            </h1>
            <span class="page1-text11">AGENT &amp; AGENCIES</span>
          </div>
          <div class="page1-stat3">
            <h1 class="page1-text12"><span>{counter4}/{counter5}</span></h1>
            <span class="page1-text14">SUPPORT</span>
            <img
              src={support}
              alt="image"
              class="page1-image1"
            />
          </div>
        </div>
        <img
          src={client}
          alt="image"
          class="page1-image2"
        />
        <img
          src={agent}
          alt="image"
          class="page1-image3"
        />
      </div>
    </div>

  )
}

export default Counter
