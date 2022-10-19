import React from 'react';
import { useContext } from 'react';
import { Context } from '../../context';
import BasketItem from '../BasketItem';
import s from './index.module.sass';
import EmptyBasket from '../EmptyBasket'

export default function BasketContainer() {

    const { orders } = useContext(Context);

    return (
        <>
            {
                orders.length === 0
                    ? <EmptyBasket />
                :
                <div className={['wrapper', s.basket_container].join(' ')}>
                        {orders.map(order => <BasketItem key={order.id} {...order} />)}
                </div>
            }
        </>
    )
}
