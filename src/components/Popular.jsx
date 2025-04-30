import React from "react";
import './layout.css'
export default function Popular() {
    return (
        <section className="popular">
        <h4>en çok paketlenen menüler</h4>
        <h2>Acıktıran Kodlara Doyuran Lezzetler</h2>
        <div className="menüler">
          <a><img src="src/assets/iteration-2/icons/1.svg"/>Ramen</a>
          <a className="active"><img src="src/assets/iteration-2/icons/2.svg"/>Pizza</a>
          <a><img src="src/assets/iteration-2/icons/3.svg"/>Burger</a>
          <a><img src="src/assets/iteration-2/icons/4.svg"/>French fries</a>
          <a><img src="src/assets/iteration-2/icons/5.svg"/>Fast food</a>
          <a><img src="src/assets/iteration-2/icons/6.svg"/>Soft drinks</a>
        </div>
  
        <div className="menu-list">
          <div className="menu-card">
            <img src="src/assets/iteration-2/pictures/food-1.png"/>
            <h3>Terminal Pizza</h3>
            <div className="details">
              <p>4.9</p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
          <div className="menu-card">
            <img src="src/assets/iteration-2/pictures/food-2.png"/>
            <h3>Position Absolute Acı Pizza</h3>
            <div className="details">
              <p>4.8</p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
          <div className="menu-card">
            <img src="src/assets/iteration-2/pictures/food-3.png"/>
            <h3>useEffect Tavuklu Burger</h3>
            <div className="details">
              <p>4.8</p>
              <p>(200)</p>
              <p>60₺</p>
            </div>
          </div>
  
        </div>
  
      </section>
    )
}