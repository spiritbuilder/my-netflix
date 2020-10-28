import React, { useEffect, useState } from 'react';
import "./Nav.css";
import netflix from "./netflixjpg.png";
import  tim from "./tim.jpg"

export default function Nav() {

    const [show, handleShow] = useState(false)
useEffect(() => {
     window.addEventListener("scroll", ()=>{
         if (window.scrollY > 100){
             handleShow(true);
         }else{handleShow(false);
        };
        
     });
     return ()=>{
        window.removeEventListener("scroll");
    };
    
}, []);

    return (
        <div className={`nav  ${show && "nav_black"}`}>
            <div className="c">
            <img className="nav_logo" src={ netflix} alt="netflix Logo" />
            <img
            className="nav_avatar"
            src={tim}
            />
            </div>
        </div> 
    )
}
