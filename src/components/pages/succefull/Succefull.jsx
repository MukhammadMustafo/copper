import React from 'react'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import './Succefull.scss'
import Kall from '../../image/kall.png'
import Prichka from '../../image/ptich.png'
import { Link } from 'react-router-dom'

function Succefull() {
  return (
    <>
    <Header></Header>
    <div className='suc__header'>
        <div className="container">
            <div className="suc__inner">
                <img className='kall' src={Kall} alt="" />
                <img className='prich' src={Prichka} alt="" />
            </div>
            <div className='suc__right'>
                <h2>Спасибо за заказ</h2>
                <p>Мы свяжемся с вами <br /> в ближайшее время</p>
                <Link to='/'>
                    <button>Главная</button>
                </Link>
            </div>
        </div>

    </div>
    <Footer/>
    </>
  )
}

export default Succefull