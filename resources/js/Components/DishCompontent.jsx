import { Link } from '@inertiajs/inertia-react';
import {dish} from '@/Components/Dish';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import React, { useState } from "react";

export default function DishComponent (props) {
    let icon = dish.filter((d) => d.label == props.label)[0].icon

    const [hover, setHover] = useState(false);

    return (
    <>
              <OverlayTrigger placement="top" overlay={<Tooltip>{props.label}</Tooltip>}>
                <div onMouseEnter={() => {setHover(true)}}
                      onMouseLeave={() => {setHover(false)}}
                      style={{backgroundColor: hover ? `rgba(100,116,139,.1)` : '#fff'}}
                      className={`me-2 icon icon-shape  shadow shadow-xs text-center border border-radius-md d-flex align-items-center justify-content-center mb-3`}>
                <img src={Boolean(hover) ? ("storage/food/"+icon+".png") : ("storage/food/"+icon+"-black.png")}
                height="32" width="32" alt={props.label} />
                </div>
              </OverlayTrigger>
    </>
    );
}
