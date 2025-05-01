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
                
                <h1>TEBRİKLER! <br />SİPARİŞİNİZ ALINDI!</h1>
            </div>
            
        </>
    )
}