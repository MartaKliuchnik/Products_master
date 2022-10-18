import React from 'react';
import s from './index.module.sass'

export default function Button({children}) {
    return (
        <button className={s.bnt}>{children}</button>
    )
}
