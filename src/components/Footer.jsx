import React from "react";
import './layout.css'
export default function Footer() {
    return (
        <footer className="footer">
      
        <div className="footer-container">
          
          <div className="footer-contact">
            <div className="footer-logo">
              <img src="src/assets/iteration-2/footer/logo-footer.svg"/>
            </div>
            <ul className="address">
              <li><img src="src/assets/iteration-2/footer/icons/icon-1.png"/>341 Londonderry Road, İstanbul Türkiye</li>
              <li><img src="src/assets/iteration-2/footer/icons/icon-2.png"/>aciktim@teknolojikyemekler.com</li>
              <li><img src="src/assets/iteration-2/footer/icons/icon-3.png"/>+90 216 123 45 67</li>
            </ul>
          </div>
          <div className="footer-menu">
            <h4>Hot Menu</h4><br/>
            <a href="#">Terminal Pizza</a>
            <a href="#">6 Kişilik Hackathlon Pizza</a>
            <a href="#">useEffect Tavuklu Pizza</a>
            <a href="#">Beyaz Console Frosty</a>
            <a href="#">Testler: Geçti Mutlu Burger</a>
            <a href="#">Position Absolute Acı Burger</a>
          </div>
          <div className="footer-instagram">
            <h4>Instagram</h4><br/>
            <div className="footer-gallery">
              <img src="src/assets/iteration-2/footer/insta/li-0.png"/>
              <img src="src/assets/iteration-2/footer/insta/li-1.png"/>
              <img src="src/assets/iteration-2/footer/insta/li-2.png"/>
              <img src="src/assets/iteration-2/footer/insta/li-3.png"/>
              <img src="src/assets/iteration-2/footer/insta/li-4.png"/>
              <img src="src/assets/iteration-2/footer/insta/li-5.png"/>
            </div>
          </div>
        </div>
        <div className="copyrigth">
          <p>© 2023 Teknolojik Yemekler.</p>
        </div>
        <div className="social">
          <i className="fa fa-twitter"></i>
        </div>
        
      </footer>
  
    )
}