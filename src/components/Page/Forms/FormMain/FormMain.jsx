import React from 'react'
import backgroundImgTop from '../../../../Assets/images/background-vectorTop.svg'
import backgroundImgBottom from '../../../../Assets/images/backgroundImg-vectorBottom.svg'
import logo from '../../../../Assets/images/logo.svg'
import css from './FormMain.module.css'
import { Route, Routes } from 'react-router-dom'
import { Autorization } from '../Autorization'
import { Registration } from '../Registration'


const FormsLeftSide = () => {
  return (
    <div>
        <section className={css.tascManager}>
            <div className={css.tascManager__backgroundImg}>
              <img src={backgroundImgTop} alt="background vectors" />
              <img src={backgroundImgBottom} alt="background vectors" />
            </div>
            <div className={css.tascManager__main}>
                <div className={css.tascManager__main__left}>
                  <div>
                    <img src={logo} alt="logo" />
                    </div>
                  <div>
                    <h1>Task Manager</h1>
                    </div>
                  <div>
                    <h6>Эффективное управление любыми проектами для вашей компании</h6>
                  </div>
                </div> 
                <Routes>
                  <Route path='/registration' element={<Registration />}></Route>
                  <Route path='/autorization' element={<Autorization />}></Route>
                </Routes>
            </div>
        </section>

        
    </div>
  )
}

export default FormsLeftSide