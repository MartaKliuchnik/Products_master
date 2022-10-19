import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import BasketItem from '../BasketItem';
import s from './index.module.sass';

export default function BasketContainer() {

    const { orders } = useContext(Context);

    return (
        <div className={['wrapper', s.basket_container].join(' ')}>
            {
                orders.map(order => <BasketItem key={order.id} {...order} />)
            }
        </div>
    )
}
