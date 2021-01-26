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
                    <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita nesciunt ut
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
                        по территории Дальнего Востока, Сибири, Казахстана, Узбекистана. Мы
                        предлагаем широкий ассортимент продуктов питания – среди которых майонез,
                        кетчупы, вассаби и соевый соус, лапша, сухари и кондитерские изделия, напитки
                        и кофе, сухое молоко и сливки (продукция сертифицирована). Наша компания
                        более 25 лет с неизменным успехом и стабильностью работает на рынке.
                        Дистрибьюторские отношения с ведущими производителями Южной Кореи
                        позволяют предлагать широкий ассортимент продукции и гибкую систему скидок
                        клиентам нашей компании. Товар проходит строгий контроль качества и
                        сопровождающей его документации.
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
                            <h4>Открытие филиалов в СНГ</h4>
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
                <div className="row maps">
                    <div className="col-5">
                        <p>Адрес: 6F, 226, Асиад-деро , Донае-гу, Пусан, Республика Корея(47837)
                            Тел .: 051-557-6781 факс: 051-556-0084 e-mail: izaccola@daum.net
                        </p>
                        <div className="map"> 
                            <GoMap coord={{ lat:37.495, lng:127.029}}/>
                        </div>
                    </div>
                    <div className="col-5">
                    <p>Офис и склад во Владивостоке.
                        Адрес: г. Владивосток, ул. Запорожская 77, офис 627
                        Тел.:+7-908-961-3591. e-mail: lyuda_kim73@mail.ru
                    </p>
                    <div className="map"> 
                        <GoMap coord={{ lat:43.130, lng:131.900}}/>
                    </div>
                </div>
                </div>
                
                
            </div>
        </section>
        <style jsx>{`
        about-head img {
            width: 200px;
            justify-self: flex-end;
        }
        .maps{
            display:flex;
            justify-content: space-between;
        }
        /* .about-sub-head img {
            width: 300px;
            justify-self: flex-end;
        }  */
        .about-head::after {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            background-color: rgb(218, 208, 208);
            position: absolute;
            top: 0;
            left: 0;
            opacity: .7;
            z-index: 0;
        
        }
        
        .about-head {
            position: relative;
        }
        .map {
            max-width:300px !important;
            z-index:4;
            height:240px;
            overflow:hidden;
        }
        .about-head > * {
            z-index: 10;
            position: relative;
        }
        
        .about-head  {
            height: 400px;;
            background-image: url('/images/about/main.jpg');
            background-repeat: no-repeat;
            background-size: cover;
            position: relative;
            width: 100%;
        }
        
        .about-head .about_title {
            position: absolute;
            top: 50%;
            left: 10%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            font-size: 20px ;
            font-weight: 600;
        }
        .about-head .about_title h1 {
            font-size: 60px;
            font-weight: 600;
            text-align: start;
        }
        
        
        .about-sub-head .container {
            overflow:hidden;
            min-height: 300px;
        }
        
        .about-sub-head p {
            text-align: start;
        }
        
        
        .timeline {
            max-width: 900px;
            margin: 0 auto;
            color: #fff;
            padding:10px;
        }
        
        .timeline .container {
            overflow: hidden;
        }
        .timeline h1,
        .about-sub-head h1 {
            color: var(--primary-color);
            text-align: start;
            font-size: 2rem;
            font-weight: bold;
        }
        
        .timeline-body {
            color: #333;
            position: relative;
            background-color:#e9e6e6;
            margin-left: 100px;
            border-radius: 0 8px 8px 0;
            padding: 5px 0;
        }
        
        .timeline-body:after {
            content: '';
            width: 4px;
            height: 100%;
            background-color: var(--secondary-color);
            position: absolute;
            left: -4px;
            top: 0;
        }
        .timeline .timeline-body .timeline-item {
            position: relative;
        }
        
        
        .timeline .timeline-body .timeline-item:after {
            content: '';
            width: 20px;
            height: 20px;
            border-radius: 50%;
            border: 4px solid var(--secondary-color);
            background-color: var(--secondary-color);
            position: absolute;
            left: -16px;
            top: 10px;
            z-index: 120;
        }
        
        .timeline .timeline-body .timeline-item .time {
            color: #333;
            position: absolute;
            left: -120px;
            top: 0px;
            opacity: 0.8;
            font-size: 16px;
            font-weight: bold;
        }
        
        .timeline .timeline-body .timeline-item .content {
            margin: 10px 20px;
            padding-bottom: 20px;
            border-bottom: 1px dashed #b4becb;
        }
        
        .timeline .timeline-item .content .title {
            font-weight: 500;
            margin-bottom: 15px;
            
        }
        
        
        .about-sub-head {
                text-align: center;
            }
        `}</style>
        </MainLayout>
    )
}


export default About