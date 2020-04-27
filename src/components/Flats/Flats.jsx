import React from 'react';
import s from './Flats.module.css';
import FlatsItem from "./FlatsItem";


const Flats = (props) => {
    let flatsElements =  props.state.flats.map( d => <FlatsItem name={d.name} addres={d.addres} price={d.price} description={d.description} tel={d.tel}g  id={d.id} key={d.id}/>  );

    return (
        <div className={s.flats1}>
            <div className={s.flatsItems}>
                { flatsElements }
            </div>
        </div>
    )
}

export default Flats;