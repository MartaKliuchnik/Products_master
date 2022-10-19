import React from 'react';
import { Link } from 'react-router-dom';
import s from './index.module.sass'


export default function NavMenu() {
    return (
        <nav className={['wrapper', s.nav_menu].join(' ')}>
            <Link to='/list_wish'>Избранное</Link>
            <Link to='/list_products'>Список товаров</Link>
            <Link to='/basket_products'>Корзина</Link>
        </nav>
    )
}
