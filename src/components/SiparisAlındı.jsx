import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./SiparisAlındı.css";


export default function SiparisAlındı() {
  const location = useLocation();
  const data = location.state;



  return (
    <div className="siparis-alindi">
      <Link to="/">
        <img src='src/assets/iteration-1/logo.svg' alt="Logo" />
      </Link>
      <h5 id="lezzet">lezzetin yolda</h5>
      <h1>SİPARİŞ ALINDI</h1>
      <div className="pizza-title">
        <h5>Position Absolute Acı Pizza</h5>
      </div>
      

        <div className="order-details">
          <div className="order-size">
            <p id='boyut'>Boyut: </p>
            <p>{data.size}</p>
          </div>
          <div className="order-dough">
            <p id='dough'>Hamur: </p> 
            <p>{data.dough}</p>
          </div>
          <div className="order-toppings">
            <p id='toppings'>Malzemeler: </p> 
            <p id='data-toppings'>{data.toppings.join(", ")}</p>
          </div>
          <div className="order-note">
            <p id='note'>Not: </p>
            <p>{data.note || "-"}</p>
          </div>
            
        </div>
        <div className="order-summary">
            <h6 className="toplamHeader2">Sipariş Toplamı</h6>
            <div className="secimler">
                <p>Seçimler: </p>
                <p>{data.selectionsCost}₺</p>
            </div>
            <div className="totalPrice">
                <p>Toplam Fiyat: </p>
                <p>{data.totalPrice}₺</p>
            </div>
            
        </div>
        
      
    </div>
  );
}
