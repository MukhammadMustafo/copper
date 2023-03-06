import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '../../header/Header'
import './Home.scss'
import Miss1 from '../../image/miss1.png'
import Miss2 from '../../image/miss2.png'
import Miss3 from '../../image/miss3.png'
import Miss4 from '../../image/miss4.png'
import Miss5 from '../../image/miss5.png'
import Miss6 from '../../image/miss3.png'
import Sariq1 from '../../image/sariq1.png'
import Sariq2 from '../../image/sariq2.png'
import Sariq3 from '../../image/sariq3.png'
import Vector2 from '../../image/Vector2.png'
import Vector1 from '../../image/vector.png'
import Tocka2 from '../../image/tocka2.png'
import Ivan from '../../image/ivan.png'
import Main1 from '../../image/main1.png'
import Main2 from '../../image/main222.png'
import Tochka from '../../image/tochka.png'
import Heart from '../../image/heart.png'
import Footer from '../../footer/Footer'
import { Context } from '../../Context/Context'
import Main from '../../main/Main'


function Home() {
    const { value, setValue } = useContext(Context)

    const slideree = useRef()
    const [count, setCount] = useState(0)
    useEffect(() => {
        slideree.current.style.transition = `0.4s ease-in-out`
        slideree.current.style.transform = `translate(${count}%)`
    }, [count])

    const slideTwo = useRef()
    const [sliderTwo, setSliderTwo] = useState(0)
    useEffect(() => {
        slideTwo.current.style.transition = `0.4s ease-in-out`
        slideTwo.current.style.transform = `translate(${sliderTwo}%)`
    }, [sliderTwo])

    const slideThree = useRef()
    const [sliderThree, setSliderThree] = useState(0)
    useEffect(() => {
        slideThree.current.style.transition = `0.4s ease-in-out`
        slideThree.current.style.transform = `translate(${sliderThree}%)`
    }, [sliderThree])

    const slideFour = useRef()
    const [sliderFour, setSliderFour] = useState(0)
    useEffect(() => {
        slideFour.current.style.transition = `0.4s ease-in-out`
        slideFour.current.style.transform = `translate(${sliderFour}%)`
    }, [sliderFour])

    const slideFive = useRef()
    const [sliderFive, setSliderFive] = useState(0)
    useEffect(() => {
        slideFive.current.style.transition = `0.4s ease-in-out`
        slideFive.current.style.transform = `translate(${sliderFive}%)`
    }, [sliderFive])

    const sliderWrap = useRef()
    const [lion, setLion] = useState(0)
    useEffect(() => {
        sliderWrap.current.style.transform = `translate(${lion}%)`
        sliderWrap.current.style.transition = `0.4s ease-in-out`
    }, [lion])

    const windget = window.localStorage.getItem('key')
    const [state, setState] = useState(windget)
    window.localStorage.setItem('key', state)
    const like = (e) => {
        setState(!state)
        window.localStorage.setItem('key', state)
        console.log(windget);
    }


    return (
        <>
            <Header />
            <header className='he'>
                <div className='home'>
                    <div className='homee' ref={sliderWrap}>
                        <div className="home__header">
                            <div>
                                <b>
                                    <h2>Хит продаж</h2>
                                    <hr />
                                </b>
                                <h4>Дистиллятор для эфирных масел </h4>
                                <span>Цена <strong>4 906 грн</strong></span>
                                <button>Купить</button>
                            </div>
                        </div>
                        <div className="home__header">
                            <div>
                                <b>
                                    <h2>Хит продаж</h2>
                                    <hr />
                                </b>
                                <h4>Дистиллятор для эфирных масел </h4>
                                <span>Цена <strong>4 906 грн</strong></span>
                                <button>Купить</button>
                            </div>
                        </div>
                        <div className="home__header">
                            <div>
                                <b>
                                    <h2>Хит продаж</h2>
                                    <hr />
                                </b>
                                <h4>Дистиллятор для эфирных масел </h4>
                                <span>Цена <strong>4 906 грн</strong></span>
                                <button>Купить</button>
                            </div>
                        </div>
                    </div>
                    <button className='dicrement' onClick={() => lion > -33.3 ? setLion(-66.6) : setLion(lion + 33.3)}><img src={Vector2} alt="" /></button>
                    <button className='icrement' onClick={() => lion < -33.3 ? setLion(0) : setLion(lion - 33.3)}><img src={Vector2} alt="" /></button>
                    <span className='span'>
                        <li className={lion == 0 ? 'image' : ''} onClick={() => setLion(0)}>
                            <b><img className='img' src={Tochka} alt="" /></b>
                        </li>
                        <li className={lion == -33.3 ? 'image' : ''} onClick={() => setLion(-33.3)}>
                            <b><img className='img' src={Tochka} alt="" /></b>
                        </li>
                        <li className={lion == -66.6 ? 'image' : ''} onClick={() => setLion(-66.6)}>
                            <b><img className='img' src={Tochka} alt="" /></b>
                        </li>
                    </span>
                </div>
            </header>
            

                <main>
                    <div className="main">
                        <div className="main__header container">
                            <h2>Наша продукция</h2>
                            <ul className='main__header__ul'>
                                <li className='header__li1'>
                                    <span>
                                        <b>
                                            <p>
                                                <div>
                                                    <img src={Miss1} alt="" />
                                                </div>
                                            </p>
                                        </b>
                                    </span>
                                </li>
                                <li className='header__li2'>
                                    <span>
                                        <b>
                                            <p>
                                                <div>
                                                    <img src={Miss2} alt="" />
                                                </div>
                                            </p>
                                        </b>
                                    </span>
                                </li>
                                <li className='header__li3'>
                                    <span>
                                        <b>
                                            <p>
                                                <div>
                                                    <img src={Miss3} alt="" />
                                                </div>
                                            </p>
                                        </b>
                                    </span>
                                </li>
                                <li className='header__li4'>
                                    <span>
                                        <b>
                                            <p>
                                                <div>
                                                    <img src={Miss4} alt="" />
                                                </div>
                                            </p>
                                        </b>
                                    </span>
                                </li>
                                <li className='header__li5'>
                                    <span>
                                        <b>
                                            <p>
                                                <div>
                                                    <img src={Miss5} alt="" />
                                                </div>
                                            </p>
                                        </b>
                                    </span>
                                </li>
                                <li className='header__li6'>
                                    <span>
                                        <b>
                                            <p>
                                                <div>
                                                    <img src={Miss6} alt="" />
                                                </div>
                                            </p>
                                        </b>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="mainn">

                            <div className="main__inner container">
                                <h2>Лучшие продажи</h2>
                                <div className='inner'>

                                    <div ref={slideree} className="main__list">
                                        <div>
                                            <div className={windget !== 'false' ? 'hea' : 'hea1'} onClick={like}>
                                                <img className='heart' src={Heart} alt="" />
                                            </div>
                                            <img src={Sariq1} alt="" />
                                            <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                        </div>
                                        <div>
                                            <div className={windget !== 'false' ? 'hea' : 'hea1'} onClick={like}>
                                                <img className='heart' src={Heart} alt="" />
                                            </div>
                                            <img src={Sariq2} alt="" />
                                            <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                        </div>
                                        <div>
                                            <div className={windget !== 'false' ? 'hea' : 'hea1'} onClick={like}>
                                                <img className='heart' src={Heart} alt="" />
                                            </div>
                                            <img src={Sariq3} alt="" />
                                            <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                        </div>
                                        <div>
                                            <div className={windget !== 'false' ? 'hea' : 'hea1'} onClick={like}>
                                                <img className='heart' src={Heart} alt="" />
                                            </div>
                                            <img src={Miss3} alt="" />
                                            <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                        </div>
                                        <div>
                                            <div className={windget !== 'false' ? 'hea' : 'hea1'} onClick={like}>
                                                <img className='heart' src={Heart} alt="" />
                                            </div>
                                            <img src={Miss4} alt="" />
                                            <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                        </div>
                                        <div>
                                            <div className={windget !== 'false' ? 'hea' : 'hea1'} onClick={like}>
                                                <img className='heart' src={Heart} alt="" />
                                            </div>
                                            <img src={Miss5} alt="" />
                                            <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                        </div>
                                        <div>

                                            <img src={Sariq1} alt="" />
                                            <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                        </div>
                                        <div>
                                            <img src={Sariq2} alt="" />
                                            <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                        </div>
                                        <div>
                                            <img src={Sariq3} alt="" />
                                            <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                        </div>

                                    </div>
                                </div>

                                <button className='katalog'>Перейти в каталог</button>
                                <button className='dicrement' onClick={() => count > 0 ? setCount(count + 33.3) : setCount(0)}><img src={Vector1} alt="" /></button>
                                <button className='icrement' onClick={() => count < -33.3 ? setCount(0) : setCount(count - 33.3)}><img src={Vector1} alt="" /></button>
                                <ul className='ul'>
                                    <li className={count == 0 ? 'activee' : 'disactive'} onClick={() => setCount(0)}>
                                        <img src={Tocka2} alt="" />
                                    </li>
                                    <li className={count == -33.3 ? 'activee' : 'disactive'} onClick={() => setCount(-33.3)}>
                                        <img src={Tocka2} alt="" />
                                    </li>
                                    <li className={count == -66.6 ? 'activee' : 'disactive'} onClick={() => setCount(-66.6)}>
                                        <img src={Tocka2} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="main__inner1 container">
                            <h2>НОВИНКИ</h2>
                            <div className="inner1">
                                <div className="main__list1" ref={slideTwo}>
                                    <div>
                                        <img src={Sariq1} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq2} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq3} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq1} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq2} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq3} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq1} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq2} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq3} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                </div>
                            </div>

                            <button className='katalog'>Перейти в каталог</button>
                            <button className='dicrement' onClick={() => sliderTwo > 0 ? setSliderTwo(sliderTwo + 33.3) : setSliderTwo(0)}><img src={Vector1} alt="" /></button>
                            <button className='icrement' onClick={() => sliderTwo < -33.3 ? setSliderTwo(0) : setSliderTwo(sliderTwo - 33.3)}><img src={Vector1} alt="" /></button>

                            <ul className='ul'>
                                <li className={sliderTwo == 0 ? 'activee' : 'disactive'} onClick={() => setSliderTwo(0)}>
                                    <img src={Tocka2} alt="" />
                                </li>
                                <li className={sliderTwo == -33.3 ? 'activee' : 'disactive'} onClick={() => setSliderTwo(-33.3)}>
                                    <img src={Tocka2} alt="" />
                                </li>
                                <li className={sliderTwo == -66.6 ? 'activee' : 'disactive'} onClick={() => setSliderTwo(-66.6)}>
                                    <img src={Tocka2} alt="" />
                                </li>
                            </ul>
                        </div>

                        <div className="coppper">
                            <div className="main__copper">
                                <div className="copper__inner">
                                    <h2>1+1=3</h2>
                                    <h4>Закажите два товара и получите третий бесплатно</h4>
                                    <button>Перейти в каталог</button>
                                </div>
                            </div>

                        </div>

                        <div className="main__inner2 container">
                            <h2>МЫ РЕКОМЕНДУЕМ</h2>
                            <div className="inner2">
                                <div className="main__list2" ref={slideThree}>
                                    <div>
                                        <img src={Sariq1} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq2} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq3} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq1} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq2} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq3} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq1} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq2} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                    <div>
                                        <img src={Sariq3} alt="" />
                                        <span>Медный чайник с фарфоровой ручкой <strong>1 953 грн</strong></span>
                                    </div>
                                </div>
                            </div>

                            <button className='katalog'>Перейти в каталог</button>
                            <button className='dicrement' onClick={() => sliderThree > 0 ? setSliderThree(sliderThree + 33.3) : setSliderThree(0)}><img src={Vector1} alt="" /></button>
                            <button className='icrement' onClick={() => sliderThree < -33.3 ? setSliderThree(0) : setSliderThree(sliderThree - 33.3)}><img src={Vector1} alt="" /></button>
                            <ul className='ul'>
                                <li className={sliderThree == 0 ? 'activee' : 'disactive'} onClick={() => setSliderThree(0)}>
                                    <img src={Tocka2} alt="" />
                                </li>
                                <li className={sliderThree == -33.3 ? 'activee' : 'disactive'} onClick={() => setSliderThree(-33.3)}>
                                    <img src={Tocka2} alt="" />
                                </li>
                                <li className={sliderThree == -66.6 ? 'activee' : 'disactive'} onClick={() => setSliderThree(-66.6)}>
                                    <img src={Tocka2} alt="" />
                                </li>
                            </ul>
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

                        <div className="main__footer">
                            <div className="main__footer__up">
                                <h2>Что думают о нас</h2>
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
                    </div>
                </main>
            <Main />
            <Footer />
        </>
    )
}

export default Home