import React from 'react'
import {Link } from 'react-router-dom'
import css from './FormMain/FormMain.module.css'



const Registration = () => {
  return (
    <>
          <div className={css.tascManager__main__right}>
              <h2>Регистрация</h2>
                  <form>
                    <input type="text" placeholder='Имя'/>
                    <input type="text" placeholder='Почта'/>
                    <input type="password" placeholder='Пароль'/>
                    <button>Зарегистрироваться</button>
                  </form>
                  <div>
                    <p>Уже есть аккаунт?</p>
                    <Link to='/autorization'>Войти</Link>
                  </div>
                </div>

    </>
  )
}

export {Registration}