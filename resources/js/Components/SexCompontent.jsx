import { Link } from '@inertiajs/inertia-react';
import {dish} from '@/Components/Dish';

import React, { useState, useEffect } from "react";

export default function SexComponent (props) {
    const sex = props.sex;
    const [hover, setHover] = useState(false);
    
    let renderedImg = Boolean(sex == "Kobieta")
        ? <img src={Boolean(hover) ? ("storage/images/female.png") : ("storage/images/female-black.png")} height="20" width="20" alt="Kobieta" />
        : <img src={Boolean(hover) ? ("storage/images/male.png") : ("storage/images/male-black.png")} height="20" width="20" alt="Mężczyzna" />

    return (
    <>
              <div onMouseEnter={() => {setHover(true)}}
                   onMouseLeave={() => {setHover(false)}}
                   style={{backgroundColor: hover ? `rgba(100,116,139,.1)` : '#fff'}}
                   className={`sex-icon ms-auto me-auto shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center`}>
                   {renderedImg}
              </div>
    </>
    );
}
