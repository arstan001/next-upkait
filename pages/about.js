import Link from 'next/link'
import React from 'react'
import MainLayout from '../components/MainLayout'
import { useRouter} from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'

import GoMap from '../components/MyMap'


function About() {
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : ru

    return (
        <MainLayout title={"About Page"}>
            <section className="about-head">
                <div className="container grid">
                    <div className="about_title">
                        <h1>Upkait</h1>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br />Expedita nesciunt ut
                        delectus, omnis repellendus quae sint vitae culpa temporibus dicta.</p>
                    </div>
                    <div className="overlay"></div>
                </div>
            </section>
            <section className="about-sub-head bg-light py-3">
                <div className="container flex">
                    <div>
                        <h1 className="md">О компании</h1>
                        <p> Торговая компания АПКАЙТ осуществляет оптовые поставки продуктов питания
                        по территории Дальнего Востока, Сибири, Казахстана, Узбекистана. <br />Мы
                            предлагаем широкий ассортимент продуктов питания – среди которых майонез,
                            кетчупы, вассаби и соевый соус, лапша, сухари и кондитерские изделия, напитки
                            и кофе, сухое молоко и сливки (продукция сертифицирована). <br />Наша компания
                            более 25 лет с неизменным успехом и стабильностью работает на рынке.
                            Дистрибьюторские отношения с ведущими производителями Южной Кореи
                            позволяют предлагать широкий ассортимент продукции и гибкую систему скидок
                            клиентам нашей компании. Товар проходит строгий контроль качества и
                            сопровождающей его документации.<br />
                            <br />
                            Наша компания ориентирована на потребности клиента, поэтому мы расширяем
                            и совершенствуем качество и ассортимент оказываемых нами услуг. В 2008 году
                            наша компания на церемонии «Ежегодная Президентская награда за достижения
                            в сфере внешнеэкономических отношений и торговли» награждена наградой от
                            министерства экономического образования за достижение объема товарооборота более $30 миллионов.

                    </p>
                        <p>В 2015 году для более удобной транспортировки и продажи продукции было открыто наше агентство в
                        Приморье. Мы поставляем местные продукты оптом и в розницу, и мы имеем рефрижераторные и
                        морозильные
                        системы для продажи с охлажденными и замороженными продуктами.

                    </p>
                    </div>
                </div>
            </section>
            <section className="timeline">
                <h1>История</h1>
                <div className="container">
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">1993</p>
                            <div className="content">
                                <h4 className="title"> Основание</h4>
                                <p>Основание компании «Катюша Трейдинг»
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time"> 8 Нбр, 1996</p>
                            <div className="content">
                                <h4 className="title"> Президентская награда  </h4>
                                <p>Президентская награда за достижения в сфере внешнеэкономических отношений и торговли (товарооборот превысил $10 млн.)
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">1 Дек, 1999</p>
                            <div className="content">
                                <h4 className="title"> Открытие филиала в России
                            </h4>
                                <p>Открытие филиала в России (г. Владивосток)
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">1 Апр, 2000</p>
                            <div className="content">
                                <h4 className="title"> Реорганизация</h4>
                                <p>Реорганизация компании в компанию «Апкайт корпорейшн»
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">2001</p>
                            <div className="content">
                                <h4 className="title"> Открытие филиала в России</h4>
                                <p>Открытие филиала в г. Новосибирске</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">Дек, 2002</p>
                            <div className="content">
                                <h4 className="title">Открытие юридической организации в России</h4>
                                <p>Открытие независимой юридической организации в г. Владивосток
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">2002</p>
                            <div className="content">
                                <h4 className="title">Президентская награда</h4>
                                <p>Президентская награда за достижения в сфере внешнеэкономических отношений и торговли</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">2004</p>
                            <div className="content">
                                <h4 className="title">Открытие филиалов в СНГ</h4>
                                <p>Открытие филиала в Казахстане и Кыргызстане</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">2006</p>
                            <div className="content">
                                <h4 className="title">Президентская награда</h4>
                                <p>Президентская награда за достижения в сфере внешнеэкономических отношений и торговли (товарооборот превысил $20 млн.)
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">30 Нбр, 2008</p>
                            <div className="content">
                                <h4 className="title">Президентская награда</h4>
                                <p>Президентская награда за достижения в сфере внешнеэкономических отношений и торговли (
                                товарооборот превысил $30 млн.). Награда от министерства экономического образования.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">Дек, 2009</p>
                            <div className="content">
                                <h4 className="title">Признание профессиональной торговой компанией</h4>
                                <p> Признан профессиональной торговой компанией Торгово-промышленной палатой Республики
                                Корея
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">Дек, 2010</p>
                            <div className="content">
                                <h4 className="title"> Превышение $43 млн. товарооборота
                            </h4>
                                <p>Годовой товарооборот компании превысил $43 млн.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">Нбр, 2011</p>
                            <div className="content">
                                <h4 className="title">Награда Премьер-министра</h4>
                                <p>Награда Премьер-министра Республики Корея в День внешней Торговли.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">Апр, 2015</p>
                            <div className="content">
                                <h4 className="title">Открытие филиала в России</h4>
                                <p>Открытие филиала в России (г. Владивосток).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-sub-head bg-light py-3">
                <div className="container grid">
                    <div>
                        <p>Head office in Busan
                        Address: 6F, 226, Asiad-daero, Dongnae-gu, Busan, Republic of Korea(47837)
                        Tel .: 051-557-6781 Fax: 051-556-0084 e-mail: izaccola@daum.net
                            <div className=" bg-light p-3">
                                <img src="./images/about/busan.png" alt="" />
                            </div>
                        </p>
                    </div>
                    <div>
                        <p>Office and warehouse in Vladivostok.
                        Address: Vladivostok, st. Aleutskaya 51, 39.
                    Tel : + 7-908-961-3591. e-mail: lyuda_kim73@mail.ru</p>
                        <div className=" bg-light p-3">
                            <img src="./images/about/vlad.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout >
    )
}


export default About