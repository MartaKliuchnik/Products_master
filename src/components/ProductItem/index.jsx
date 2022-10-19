import React from 'react';
import s from './index.module.sass';
import { HeartFilled } from '@ant-design/icons';
import Button from '../UI/Button';
import { useContext } from 'react';
import {Context} from '../../context'


export default function ProductItem({ id, title, price, description, image}) {
    
    const { addToBasket } = useContext(Context);

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
                <Button onClick={() => addToBasket(id, title, price, image)}>Добавить в корзину</Button>
            </div>
        </div>
    )
}
