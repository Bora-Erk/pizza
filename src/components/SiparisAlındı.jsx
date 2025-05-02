import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./SiparisAlındı.css";


export default function SiparisAlındı() {
  const location = useLocation();
  const data = location.state;

  if (!data) {
    return (
      <div className="siparis-alindi">
        <p>Gösterilecek sipariş bilgisi yok.</p>
        <Link to="/">Anasayfaya dön</Link>
      </div>
    );
  }

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
            <p>Boyut: {data.size}</p>
            <p>Hamur: {data.dough}</p>
            <p>Ek malzemeler: {data.toppings.join(", ")}</p>
            <p>Not: {data.note || "-"}</p>
            <p>Miktar: {data.quantity}</p>
        </div>
        <div className="order-summary">
            <h6>Sipariş Toplamı</h6>
            <p>Seçimler: {data.selectionsCost}₺</p>
            <p>Toplam Fiyat: {data.totalPrice}₺</p>
        </div>
        
      
    </div>
  );
}
