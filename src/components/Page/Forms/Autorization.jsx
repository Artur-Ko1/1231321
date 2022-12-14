import React from 'react'
import { Link } from 'react-router-dom'
import css from './FormMain/FormMain.module.css'

const Autorization = () => {
  return (
    <>
        <div className={css.tascManager__main__right}>
                  <h2>Авторизация</h2>
                  <form>
                    <input type="text" placeholder='Почта'/>
                    <input type="password" placeholder='Пароль'/>
                    <button>Авторизоваться</button>
                  </form>
                  <div>
                    <p>Нет учетной записи?</p>
                    <Link to='/registration'>Зарегистрироваться</Link>
                  </div>
                </div>
    </>
  )
}

export {Autorization}