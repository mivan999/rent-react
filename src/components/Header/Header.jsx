import React from 'react';
import logo from './logo.jpg';
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
    return (<header >
        <div className={s.gorod}>Sochi</div>
    <div className={s.navMenu}>


      <div className={s.Menu1}>
          <img src={logo }  />
      </div>
        <div className={s.MenuAll}>
          <div className={s.Menu2}>
              <a>Аренда</a>
          </div>
          <div className={s.Menu3}>
              <a>Покупка</a>
          </div >
          <div className={s.Menu4}>
              <a>Новостройки</a>
          </div>
          <div className={s.Menu5}>
              <a>Ипотека</a></div>
          <div className={s.Menu6}>
              <a>Карта</a></div>
        </div>
            <div className={s.login}>
                <NavLink to={'/login'}>Login</NavLink>
                <div><a>Регистрация</a></div>
            </div>
    </div>
    </header>)
}

export default Header;