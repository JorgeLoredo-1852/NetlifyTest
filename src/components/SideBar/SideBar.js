import React from 'react';

import './_SideBar.scss';
import xlink from '../../img/sprite.svg';

const SideBar = () =>{
    return(
        <nav className="sidebar">
            <ul className="side-nav">
                <Item icon = "#icon-home" name="Hotel"/>
                <Item icon = "#icon-aircraft-take-off" name="Flights"/>
                <Item icon = "#icon-key" name="Car Rental"/>
                <Item icon = "#icon-map" name="Tours"/>
            </ul>
            <div className="legal">&copy; 2020. Created by me. All rights reserved</div>
        </nav>
    );
};

const Item = (props) => {
    return(
        <li className= {props.name === "Hotel" ? "side-nav__item side-nav__item--active" : "side-nav__item"}>
            <a href="/" className="side-nav__link">
                <svg className="side-nav__icon">
                    <use xlinkHref={xlink + props.icon}></use>
                </svg>
                <span>{props.name}</span>
            </a>
        </li>
    );
};

export default SideBar;