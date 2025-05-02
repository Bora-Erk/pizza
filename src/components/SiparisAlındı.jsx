import React from "react";
import './SiparisAlındı.css'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
export default function SiparisAlındı() {
    return (
        <>

            <div className="siparis-alindi">
                <Link to='/'>
                    <img src='src/assets/iteration-1/logo.svg'/>
                </Link>
                <div>
                    <p>lezzetin yolda</p>
                    <h1>SİPARİŞ ALINDI</h1>
                </div>
                <hr/>
                <p>Position Absolute Acı Pizza</p>

                <div>
                    <p>Boyut:</p>
                    <p>Hamur:</p>
                    <p>Ek malzemeler</p>
                </div>
            </div>
            
        </>
    )
}