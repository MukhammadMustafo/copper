import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { data } from '../../../data/data'
import Header from '../../../header/Header'
import './Catalog__product.scss'
import Idish from '../../../image/idish.png'
import Insta from '../../../image/insta__group.png'
import { Context } from '../../../Context/Context'
import Vector1 from '../../../image/vector.png'
import Tocka2 from '../../../image/tocka2.png'
import Ivan from '../../../image/ivan.png'
import Sariq1 from '../../../image/sariq1.png'
import Sariq2 from '../../../image/sariq2.png'
import Sariq3 from '../../../image/sariq3.png'
import Footer from '../../../footer/Footer'

function Catalog__product() {
    const [count, setCount] = useState(0)
    const { catal, setCatal } = useContext(Context)
    const catRef = useRef()
    const [product, setProduct] = useState(1)
    useEffect(() => {
        catRef.current.style.transform = `translateY(${count}%)`
        catRef.current.style.transition = `0.3s ease-in-out all`
    })
    const slideFive = useRef()
    const [sliderFive, setSliderFive] = useState(0)
    useEffect(() => {
        slideFive.current.style.transition = `0.4s ease-in-out`
        slideFive.current.style.transform = `translate(${sliderFive}%)`
    }, [sliderFive])
    const slideFour = useRef()
    const [sliderFour, setSliderFour] = useState(0)
    useEffect(() => {
        slideFour.current.style.transition = `0.4s ease-in-out`
        slideFour.current.style.transform = `translate(${sliderFour}%)`
    }, [sliderFour])

    const {seter, setSeter} = useContext(Context)
    const {raqam, setRaqam} = useContext(Context)
    const arrData = []
    const mapper= ()=>{
        setSeter(catal)
        setId(product)
        data?.map((e) =>{
            if(e.id == navig)
                    if(!arrData.includes(e.id)){
                        arrData.push(e)
                        setRaqam(arrData)
                    }
                       
            }
        )
    }
    const {id, setId} = useContext(Context)


    const local = useLocation()
    const navig = local.pathname.split('/catalog/').join('')
    
    return (
        <>
            <Header />
            <div className='header__product'>
                <div className="container">
                    <div className="product__inner">
                        <h3><Link to='/home'>Главная</Link> / <Link className='a__catal' to='/catalog'>Каталог</Link> / <strong>Дистиллятор для получения гидролата 8л</strong></h3>
                        <div>
                            <div className='product__left'>
                                <img className='img' src={Idish} alt="" onClick={() => count > -33.3 ? setCount(-99.9) : setCount(count + 33.3)} />
                                <div >
                                    <ul ref={catRef}>
                                        {   
                                            data?.map((e, i) => (
                                                <li><img src={e.img} alt="" /></li>
                                            ))
                                        }
                                    </ul>
                                </div>
                                <img src={Idish} alt="" className='idish' onClick={() => count < -66.6 ? setCount(0) : setCount(count - 33.3)} />
                            </div>
                            <div className='product__right'>
                                {
                                    data?.map((e,i)=>(
                                        navig == e.id?
                                        <img src={catal.img || e.img} alt="" />
                                        : ''
                                    ))

                                }
                            </div>
                            <div className='product__main'>
                                <h2>Дистиллятор для <br /> получения гидролата 8л</h2>
                                <span>
                                    <h6>В наличии</h6>
                                    <h5>Артикул: <strong>CP-0803</strong></h5>
                                </span>
                                <hr />
                                <h3>Описание</h3>
                                <p>Медный дистиллятор «Феникс» станет Вашим надёжным помощником и проводником в мир дистилляции и красоты, с которым Вы легко сможете получать свои любимые гидролаты или алкогольные напитки.</p>
                                <hr />
                                <span>
                                    <h2>Цена</h2>
                                    {
                                        data?.map((e,i)=>(
                                            navig == e.id?
                                            <>
                                                <b>{catal.price * product || e.price * product} грн</b>
                                                <h4>{catal.price || e.price}грн</h4>
                                            </>: ''
                                        ))
                                    }
                                </span>
                                <div>
                                    <span className='span__div'>
                                        <b onClick={() => setProduct(product - 1)}>-</b>
                                        <b>{product}</b>
                                        <b onClick={() => setProduct(product + 1)}>+</b>
                                    </span>
                                    <Link to='/buy'>
                                        <button onClick={mapper}>Купить</button>
                                    </Link>
                                </div>
                                <hr />
                                <div className='podel'>
                                    <h5>Поделиться</h5>
                                    <img src={Insta} alt="" />
                                </div>
                            </div>
                        </div>
                        <hr />
                    </div>
                    <div className='opisaniye'>
                        <div>
                            <h2>Описание</h2>
                            <p>Для всех, кто хочет самостоятельно получать гидролат или дистиллят, и быть уверенным в его качестве – у нас есть готовое и удобное решение. Современный дистиллятор «Феникс» станет для Вас отличным помощником. Полностью медный аппарат изготовлен на собственном производстве, на основании многолетнего опыта работы с медными дистилляторами.
                                <br /><br />
                                Гораздо практичней, чем алькитара, и ни в чём ей не уступающий. Даже наоборот, имеет ряд преимуществ, таких как толщина металла, надёжные, сварные швы, и деревянные ручки, которые не так нагреваются, как латунные. Соединение ароматизационной колонны с емкостью герметично и долговечно. Радиатор данного аппарата расходует в 3 раза меньше воды для охлаждения, в сравнении с алькитарой такого же объёма.
                                <br /><br />
                                Замечательный аппарат прослужит для Вас долгие годы и будет радовать своего владельца гидролатом высокого качества. Оцените все преимущества паровой дистилляции и получайте гидролаты, в натуральности которых Вы можете быть уверенны. Аппарат полностью укомплектован и готов к работе. Объём перегонного куба – 8 литров. Объём колонны – 0,8 литра. Аппарат полностью укомплектован и готов к эксплуатации.
                            </p>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="main__footer">
                    <div className="main__footer__up">
                        <div className='footerchaa'>
                            <h2>Отзывы</h2>
                            <button>Оставить отзыв</button>
                        </div>
                        <div className="lister">
                            <div className="up__list" ref={slideFive}>
                                <div>
                                    <img src={Ivan} alt="" />
                                    <h4>Иван Иванов</h4>
                                    <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                                    <h5><strong>25.09.23</strong></h5>
                                </div>
                                <div>
                                    <img src={Ivan} alt="" />
                                    <h4>Иван Иванов</h4>
                                    <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                                    <h5><strong>25.09.23</strong></h5>
                                </div>
                                <div>
                                    <img src={Ivan} alt="" />
                                    <h4>Иван Иванов</h4>
                                    <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                                    <h5><strong>25.09.23</strong></h5>
                                </div>
                                <div>
                                    <img src={Ivan} alt="" />
                                    <h4>Иван Иванов</h4>
                                    <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                                    <h5><strong>25.09.23</strong></h5>
                                </div>
                                <div>
                                    <img src={Ivan} alt="" />
                                    <h4>Иван Иванов</h4>
                                    <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                                    <h5><strong>25.09.23</strong></h5>
                                </div>
                                <div>
                                    <img src={Ivan} alt="" />
                                    <h4>Иван Иванов</h4>
                                    <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                                    <h5><strong>25.09.23</strong></h5>
                                </div>
                                <div>
                                    <img src={Ivan} alt="" />
                                    <h4>Иван Иванов</h4>
                                    <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                                    <h5><strong>25.09.23</strong></h5>
                                </div>
                                <div>
                                    <img src={Ivan} alt="" />
                                    <h4>Иван Иванов</h4>
                                    <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                                    <h5><strong>25.09.23</strong></h5>
                                </div>
                                <div>
                                    <img src={Ivan} alt="" />
                                    <h4>Иван Иванов</h4>
                                    <p>Наше оборудование прозводится вручную. Мы постоянно производим контроль качества произведенной продукции. В то же время, если в ходе транспортировки или эксплуатации в течении первых 2 лет происходят поломки, мы всегда находим с клиентом наиболее удобный вариант решения вопроса. </p>
                                    <h5><strong>25.09.23</strong></h5>
                                </div>
                            </div>
                        </div>
                        <button className='dicrement' onClick={() => sliderFive > 0 ? setSliderFive(sliderFive + 33.3) : setSliderFive(0)}><img src={Vector1} alt="" /></button>
                        <button className='icrement' onClick={() => sliderFive < -33.3 ? setSliderFive(0) : setSliderFive(sliderFive - 33.3)}><img src={Vector1} alt="" /></button>
                        <ul className='ul'>
                            <li className={sliderFive == 0 ? 'activee' : 'disactive'} onClick={() => setSliderFive(0)}>
                                <img src={Tocka2} alt="" />
                            </li>
                            <li className={sliderFive == -33.3 ? 'activee' : 'disactive'} onClick={() => setSliderFive(-33.3)}>
                                <img src={Tocka2} alt="" />
                            </li>
                            <li className={sliderFive == -66.6 ? 'activee' : 'disactive'} onClick={() => setSliderFive(-66.6)}>
                                <img src={Tocka2} alt="" />
                            </li>
                        </ul>
                    </div>


                </div>
                <div className="mainn3">

                    <div className="main__inner3">
                        <h2>СКИДКИ</h2>
                        <div className="inner3">
                            <div className="main__list3" ref={slideFour}>
                                <div>
                                    <img src={Sariq1} alt="" />
                                    <span>Медный чайник с фарфоровой ручкой <strong><b>2023</b> 1 953 грн</strong> </span>
                                </div>
                                <div>
                                    <img src={Sariq2} alt="" />
                                    <span>Медный чайник с фарфоровой ручкой <strong><b>2023</b> 1 953 грн</strong></span>
                                </div>
                                <div>
                                    <img src={Sariq3} alt="" />
                                    <span>Медный чайник с фарфоровой ручкой <strong><b>2023</b> 1 953 грн</strong></span>
                                </div>
                                <div>
                                    <img src={Sariq1} alt="" />
                                    <span>Медный чайник с фарфоровой ручкой <strong><b>2023</b> 1 953 грн</strong> </span>
                                </div>
                                <div>
                                    <img src={Sariq2} alt="" />
                                    <span>Медный чайник с фарфоровой ручкой <strong><b>2023</b> 1 953 грн</strong></span>
                                </div>
                                <div>
                                    <img src={Sariq3} alt="" />
                                    <span>Медный чайник с фарфоровой ручкой <strong><b>2023</b> 1 953 грн</strong></span>
                                </div>
                                <div>
                                    <img src={Sariq1} alt="" />
                                    <span>Медный чайник с фарфоровой ручкой <strong><b>2023</b> 1 953 грн</strong> </span>
                                </div>
                                <div>
                                    <img src={Sariq2} alt="" />
                                    <span>Медный чайник с фарфоровой ручкой <strong><b>2023</b> 1 953 грн</strong></span>
                                </div>
                                <div>
                                    <img src={Sariq3} alt="" />
                                    <span>Медный чайник с фарфоровой ручкой <strong><b>2023</b> 1 953 грн</strong></span>
                                </div>
                            </div>
                        </div>

                        <button className='katalog'>Перейти в каталог</button>
                        <button className='dicrement' onClick={() => sliderFour > 0 ? setSliderFour(sliderFour + 33.3) : setSliderFour(0)}><img src={Vector1} alt="" /></button>
                        <button className='icrement' onClick={() => sliderFour < -33.3 ? setSliderFour(0) : setSliderFour(sliderFour - 33.3)}><img src={Vector1} alt="" /></button>
                        <ul className='ul'>
                            <li className={sliderFour == 0 ? 'activee' : 'disactive'} onClick={() => setSliderFour(0)}>
                                <img src={Tocka2} alt="" />
                            </li>
                            <li className={sliderFour == -33.3 ? 'activee' : 'disactive'} onClick={() => setSliderFour(-33.3)}>
                                <img src={Tocka2} alt="" />
                            </li>
                            <li className={sliderFour == -66.6 ? 'activee' : 'disactive'} onClick={() => setSliderFour(-66.6)}>
                                <img src={Tocka2} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Catalog__product