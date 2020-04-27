import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Search.module.css";

const Search = () => {
    return (
        <div className={s.wrappernull}>
            <div className={s.bgcolor}>
                <div className={s.wrapper}>
                    <div className={s.liths}> Сначала ищи на RentHome</div>
                    <div className={s.buttonsGroup} >
                        <button>Купить</button>
                        <button>Снять</button>
                        <button>Посуточно</button>
                        <button>Оценить квартиру</button>
                        <button>Ипотека</button>
                    </div>
                    <div className={s.search}>
                        <div className={s.searchInput} > <input/></div>
                    </div>
                    <div className={s.buttonsGroup2}>
                        <div>
                            <button>Карта</button>
                            <button>Показать</button>
                        </div>
                    </div>

                </div>
            </div>


        </div>)
}

export default Search;