import React from "react";
import './layout.css'
export default function Featured() {
    return (
        <section className="featured">
        <div className="featured-card-red">
          <h2>Özel Lezzetus</h2>
          <p>Position: Absolute Acı Burger</p>
          <button className="btn-secondary">SİPARİŞ VER</button>
        
        </div>
        <div className="featured-group">
          <div className="featured-card-siyah">
            <h3>Hackathlon <br/>Burger Menü</h3>
            <button className="btn-secondary">SİPARİŞ VER</button>
            
          </div>
          <div className="featured-card-açık">
            <h3 className="red">Çoooook</h3> <h3>hızlı, npm gibi kurye</h3>
            <button className="btn-secondary">SİPARİŞ VER</button>
           
          </div>
        </div>
      </section>
    )
}