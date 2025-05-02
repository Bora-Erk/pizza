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
      <h1>Tebrikler, siparişiniz alındı!</h1>

      <div className="order-details">
        <p>Boyut: {data.size}</p>
        <p>Hamur: {data.dough}</p>
        <p>Ek malzemeler: {data.toppings.join(", ")}</p>
        <p>Not: {data.note || "-"}</p>
        <p>Miktar: {data.quantity}</p>
        <div className="order-summary">
            <h6>Sipariş Toplamı</h6>
            <p>Seçimler: {data.selectionsCost}₺</p>
            <p>Toplam Fiyat: {data.totalPrice}₺</p>
        </div>
        
      </div>
    </div>
  );
}
