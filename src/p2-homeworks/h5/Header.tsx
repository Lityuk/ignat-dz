import React from 'react'
import {NavLink} from "react-router-dom";
import s from "./Header.module.css"

function Header() {


    const onClickHandler = () => {
        let elem = document.querySelector("#wrapper")
        if (elem) {
            elem.classList.toggle(s.nav_open)
        }
    }

    return (
        <div className={s.wrapper} id="wrapper">


            <div className={s.nav}>

                <div className={s.nav__icon} onClick={() => onClickHandler()}>
                    {'=>'}
                </div>
                <ul className={s.nav__body}>
                    <li>
                        <NavLink className={s.navlink} to="/PATH.PRE_JUNIOR">PreJunior</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.navlink} to="/PATH.JUNIOR">Junior</NavLink>
                    </li>
                    <li>
                        <NavLink className={s.navlink} to="/PATH.JUNIOR_PLUS">Junior Plus</NavLink>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Header
