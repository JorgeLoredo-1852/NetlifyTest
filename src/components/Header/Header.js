import React from 'react';

import logo from '../../img/logo.png'
import user from '../../img/user.jpg';
import xlink from '../../img/sprite.svg';

import './_Header.scss';

const Header = () =>{
    return(
        <header className="header">
            <img src={logo} alt="trillo" className="logo"/>

            <form action="#" className="search">
                <input type="text" className="search__input" placeholder="Search Results"/>

                <button className="search__button">
                    <svg className="search__icon">
                        <use xlinkHref={xlink + "#icon-magnifying-glass"}></use>
                    </svg>
                </button>
            </form>

            <nav className= "user-nav">
                <Icon_box icon="#icon-bookmark" notification ="7"/>
                <Icon_box icon="#icon-chat" notification ="20"/>
                <div className="user-nav__user">
                    <img src={user} alt="user photo" className="user-nav__user-photo"/>
                    <span className="user-nav__user-name">Cesar</span>
                </div>
            </nav>
        </header>
    );
};

const Icon_box = (props) =>{
    return(
        <div className="user-nav__icon-box">
            <svg className="user-nav__icon">
                <use xlinkHref = {xlink + props.icon}></use>
            </svg>
            <span className="user-nav__notification">{props.notification}</span>
        </div>
    );
};

export default Header;