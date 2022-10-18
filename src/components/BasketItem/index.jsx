import React from 'react';
import s from './index.module.sass'

export default function BasketItem({ title, price, image, basket}) {
    return (
        <div>
            {
                basket === true
            ? 
            <div className={s.basket_item}>
                <img src={image} alt="photo_product" />
                <p style={{width: 400}}>{title}</p>
                <p style={{fontSize: 25, fontWeight: 700}}>{price} €</p>
            </div>
            : ' '
            }
        </div>
    )
}
