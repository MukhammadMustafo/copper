import React from 'react'
import Header from '../../header/Header'
import './About.scss'
import Imzo from '../../image/imzo.png'
import About__Fon from '../../image/about__fon.png'
import Karta from '../../image/karta.png'
import daraxt from '../../image/daraxt.png'
import Page1 from '../../image/page1.png'
import Page2 from '../../image/page2.png'
import Page3 from '../../image/page3.png'
import Main from '../../main/Main'
import Footer from '../../footer/Footer'

function About() {
    return (
        <>
            <Header />
            <div className='header__about'>
                <div className="container">
                    <div className='about__inner'>
                        <div className="about__inner__text">
                            <h3>Главная / <strong>О нас</strong></h3>
                            <h2>О нас</h2>
                            <hr />
                            <h4>Мы любим все, что <br /> сделано из меди</h4>
                            <span>
                                <h5>Иван <br /> Иванов</h5>
                                <img src={Imzo} alt="" />
                            </span>
                        </div>
                        <img src={About__Fon} alt="" />
                    </div>
                </div>

            </div>

            <main>
                <div className="main__about">
                    <div className="container">
                        <div className="main__about__inner">
                            <div className="about__inner__left">
                                <h3>Наши клиенты</h3>
                                <p>Мы требовательны к себе, чтобы каждый день становится лучше для наших клиентов и находить лучшие решения для каждого из них</p>
                            </div>
                            <div className="about__inner__right">
                                <h2>Счетчик клиентов</h2>
                                <h5>12346</h5>
                            </div>
                        </div>
                    </div>

                    <div className="about__history">
                        <div className="history__inner">
                            <h2>COPPER <br /> PRO</h2>
                            <div className="container">
                                <div>
                                    <div>
                                        <h3>Наша история</h3>
                                        <span>
                                            <p>Сумка-мессенджер мужская тесьма, жилет нейтра 8 бит. Chartreuse Disrupt посадил птицу на лебеду jianbing. Хэштег для позднего завтрака с питьевым уксусом, скейтборд с тильдой холодного отжима.
                                                <br /><br />
                                                Крафтовый пивной шалфей занимает кардиган из ретро-фарма и стол, а также фланель из кейтара для гастропабов.
                                                <br /><br />
                                                Unicorn jean шорты quinoa подлинный cronut tilde twee YOLO, потроха эстетичный yuccie iPhone truffaut seitan.
                                                <br /><br />
                                                Создавайте пивные путники, лесорубы, суккуленты своими руками, Helvetica Vexillologist, следующий уровень разбудили толстовку с капюшоном keffiyeh tumblr schlitz chambray пишущую машинку.
                                                <br /><br />
                                                Плитка метро шестиугольника keffiyeh.</p>
                                            <b>Синтетический этический биодизельный путин. Горькая борода шалфей лоу-фай. Пало Санто буквально пледы лампочки Эдисона, вилы пить уксус аутентичный пабст уличное искусство метро плитка крафтовое пиво одно происхождение кофе шаман ловец снов.
                                                <br /><br />
                                                Williamsburg sriracha portland, ассиметричная свиная грудинка для микродозирования la croix 3 wolf moon umami.
                                                <br /><br />
                                                Четырехдолларовые тосты, модный топор трюффо, ломо-клетчатый мех PBR & B Scester Остин Палео Thundercats семейная реликвия Knausgaard от фермы до стола.</b>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="about__geogrofy">
                    <div className="container">
                        <div className="geografy__inner">
                            <h2>Наша география</h2>
                            <p>Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине.</p>
                        </div>
                        <img src={Karta} alt="" />
                    </div>
                </div>

                <div className="about__daraxt">
                    <div className="container">
                        <div className="daraxt__inner">
                            <img src={daraxt} alt="" />
                            <div className="daraxt__right">
                                <h2>Наши ценности</h2>
                                <p>Наше производство находится в Украине, но клиенты из более чем 50 стран радуются товарам, приобретенным в нашем магазине. </p>
                                <div>
                                    <img src={Page1} alt="" />
                                    <h4>Оперативность</h4>
                                </div>
                                <div>
                                    <img src={Page2} alt="" />
                                    <h4>Качественный товар и сервис</h4>
                                </div>
                                <div>
                                    <img src={Page3} alt="" />
                                    <h4>Гибкость</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Main/>
            <Footer/>
        </>
    )
}

export default About