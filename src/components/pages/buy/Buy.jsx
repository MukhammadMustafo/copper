import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Context/Context'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import Delete from '../../image/deleter.png'
import './Buy.scss'

function Buy() {
    // onClick={() => (
    //     setOrder([...new Set([...order, item])])
    const { id, setId } = useContext(Context)
    const { seter, setSeter } = useContext(Context)
    const {raqam, setRaqam} = useContext(Context)
    console.log(raqam);
    return (
        <>
            <Header />
            <div className='buy__header'>
                <div className="container">
                    <div className="buy__inner">
                        <h3>Главная / <strong>Корзина</strong></h3>
                        <h2>Корзина</h2>
                        <div>
                            <div className='buy__left'>
                                <ul>
                                    <li className='buy__tovar'>Товар</li>
                                    <li className='buy__kolic'>Количество</li>
                                    <li className='buy__cena'>Цена</li>
                                </ul>
                                <hr />
                                <div>
                                    {
                                        raqam?.map((e)=>(
                                            <li>
                                                <span>
                                                    <img src={e.img} alt="" />
                                                    <h4>{e.name}</h4>
                                                </span>
                                                <h5>{id} шт.</h5>
                                                <h6>{id * e.price} грн</h6>
                                                <img onClick={()=>setRaqam([])} src={Delete} alt="" />
                                            </li>

                                        )) 
                                    }
                                </div>
                            </div>
                            <div className='buy__right'>
                                <h2>Итого</h2>
                                <h3>{id * raqam.price} грн</h3>
                                <hr />
                                <h4>У вас бесплатная <br /> доставка! </h4>
                                <Link to='/succefull'>
                                    <button>Оформить заказ</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Buy