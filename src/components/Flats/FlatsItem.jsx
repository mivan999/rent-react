import React from 'react';
import s from './Flats.module.css';
import {NavLink} from "react-router-dom";
import imageMain from './../../img/845086857-4.jpg';
import imageSmall1 from './../../img/845086892-2.jpg';
import imageSmall2 from './../../img/845086863-2.jpg';
import imageSmall3 from './../../img/845086892-2.jpg';
import imageSmall4 from './../../img/845086900-2.jpg';

const FlatsItem = (props) => {
    let path = "/flats/" + props.id;

    return <div className={s.flats + ' ' + s.active}>


        <div className={s.image}>

            <div><img src={imageMain}/></div>
            <div className={s.smallImage}>
                <div><img src={imageSmall1}/></div>
                <div><img src={imageSmall2}/></div>
                <div><img src={imageSmall3}/></div>
                <div><img src={imageSmall4}/></div>
            </div>
        </div>

        <div className={s.info}><NavLink to={path}>{props.name}</NavLink>
            <div className={s.addres}>{props.addres}</div>
            <div className={s.subinfo}>{props.price}</div>
            <div className={s.subinfo}>{props.description}</div>
            <div className={s.subinfo}>{props.tel}</div>
        </div>
        <div className={s.agent}>
            <div className={s.agent}>{props.tel}</div>
        </div>


    </div>
}

export default FlatsItem;