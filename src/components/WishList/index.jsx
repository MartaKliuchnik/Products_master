import React, { useContext } from 'react';
import WishItem from '../../components/WishItem';
import { Context } from '../../context';
import EmptyWish from '../../components/EmptyWish';
import s from './index.module.sass'

export default function WishList() {

    const { products } = useContext(Context);
    
    return (
        <div className={['wrapper', s.wish_container].join(' ')}>
            {
                (products.map(product => product.wish === undefined ))
                    ? <EmptyWish />
                    : products.map(product => <WishItem key={product.id} {...product} />)
            }
        </div>
    )
}