import React from "react";
import './layout.css'
export default function Header() {
    return (
        <header className="site-header">
      <img className="logo" src="src/assets/iteration-1/logo.svg"/>
      <p>fırsatı kaçırma</p>
      <h1 className="ana-baslık">KOD ACIKTIRIR <br/> PİZZA, DOYURUR</h1>
      <a href='/siparis'><button className="btn">ACIKTIM</button></a>
      
    </header>
    )
}
