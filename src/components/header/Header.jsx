import React, { useState } from 'react'
import './Header.scss'
import Header__img from '../image/header__logo.png'
import Heart from '../image/heart.png'
import Shop from '../image/shop.png'
import User from '../image/user.png'
import { Link } from 'react-router-dom'

function Header() {
  const [spam, setSpam] = useState(false)
  return (
    <div className='contai'>
        <div className="header__logo">
            <Link to='/'>
              <img className='img' src={Header__img} alt="" />
            </Link>
          <ul className='header__left'>
            <Link to='/catalog'>
              <li>Каталог</li>
            </Link>
            <Link to='/news'>
              <li>Новости</li>
            </Link>
            <li>Доставка</li>
            <Link to='/about'>
              <li>О нас</li>
            </Link>
            <li>Контакты</li>
          </ul>
          <ul className='header__right'>
            <li className='header__heart'>
              <img src={Heart} alt="" />
            </li>
            <li className='header__user'>
              <img src={User} alt="" />
            </li>
            <li className='header__shop'>
              <img src={Shop} alt="" />
            </li>
          </ul>
          <div onClick={()=> setSpam(!spam)} className={spam == true ? 'activee spanlar': 'spanlar'}>
            <span className='span__first'></span>
            <span className='span__second'></span>
            <span className='span__three'></span>
          </div>
          <div className={spam == true ? 'active': ''}>
            <ul className='linklar'>
              <Link to='/catalog'>
                <li>Каталог</li>
              </Link>
              <Link to='/news'>
                <li>Новости</li>
              </Link>
              <li>Доставка</li>
              <Link to='/about'>
                <li>О нас</li>
              </Link>
              <li>Контакты</li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Header