import React from "react";
import './layout.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function Featured() {
    return (
        <section className="featured">
        <div className="featured-card-red">
          <h2>Özel Lezzetus</h2>
          <p>Position: Absolute Acı Burger</p>
          <Link to='siparis'><button className="btn-secondary">SİPARİŞ VER</button></Link>
        
        </div>
        <div className="featured-group">
          <div className="featured-card-siyah">
            <h3>Hackathlon <br/>Burger Menü</h3>
            <Link to='siparis'><button className="btn-secondary">SİPARİŞ VER</button></Link>
            
          </div>
          <div className="featured-card-açık">
            <h3 className="red">Çoooook</h3> <h3>hızlı, npm gibi kurye</h3>
            <Link to='siparis'><button className="btn-secondary">SİPARİŞ VER</button></Link>
           
          </div>
        </div>
      </section>
    )
}