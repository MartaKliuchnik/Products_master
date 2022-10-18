import React from 'react';
import s from './index.module.sass';
import { HeartFilled } from '@ant-design/icons';
import Button from '../UI/Button';


export default function ProductItem({ title, price, description, image}) {
    
    // console.log(rating)

    return (
        <div className={s.card_container}>
            <div className={s.photo_card}>
                <img src={image} alt="photo_product" />
            </div>
            <div className={s.product_price}>
                <p style={{ fontWeight: 900 }}>€{price}</p>
                <HeartFilled className={s.heart} />
            </div>
            <p style={{fontWeight: 900}}>{title}</p>
            {/* <p>{description}</p> */}
            <div className={s.btn_container}>
                <Button>Добавить в корзину</Button>
            </div>
        </div>
    )
}
