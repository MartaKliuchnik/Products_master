import React from 'react';
import s from './index.module.sass';

export default function ButtonChangeCount({children}) {
    return (
        <button className={s.btn}>{children}</button>
    )
}
