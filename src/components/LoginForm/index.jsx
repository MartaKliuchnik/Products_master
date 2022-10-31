import React from 'react';
import s from './index.module.sass';

export default function LoginForm() {

    return (
        <form className={s.form_container}>
            <input type="email" placeholder='Email' name="email" />
            <input type="password" placeholder='Password' name="password" />
            <button>Войти в аккаунт</button>
        </form>
    )
}
