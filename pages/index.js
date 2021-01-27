import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../components/MainLayout'
import Link from 'next/link'
import en from '../locales/en'
import ru from '../locales/ru'

import {Card} from 'react-bootstrap'
function Index() {
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : ru
    return (
        <MainLayout title={"Home Page"}>
            <section className="showcase">
        <div className="container grid">
            <div className="showcase-text">
                <h1>Корейские товары</h1>
                <p>Приобретайте майонез, панировочные сухари, рамен бысторого приготовления, различные соусы, напитки и
                    многое другое в Upkaite!
                </p>
                <a href="products2.html" className="btn btn-outline">Смотреть товары</a>
            </div>
            <div className="showcase-img">
                <img src="/images/home-bg.png" alt=""/>
            </div>
        </div>
    </section>

    <section className="intro">
        <div className="container">
            <h3 className="stats-heading text-center my-1">
                Upkait имеет более 30 лет опыта, <br/>и мы являемся самой известной торговой компанией в России и странах
                СНГ по
                продаже корейских продуктов питания! 
            </h3>
        </div>
    </section>

    <section className="cli">
        <div className="container grid">
        </div>
    </section>

    <section className="whyus my-5 py-5">
        <div className="container grid">
            <div className="text-center bg-img1">
                <h3 className="lg"> Почему выбирают нас?</h3>
                <p>Upkait официально работает со всеми корейскими
                    конгломератами и средними и маленькими компаниями. <br/>Мы получаем низкие цены от завода
                    благодаря
                    крупным заказам, и наши сотрудники с многолетним опытом торговли оперативно и точно поставляют
                    продукцию нашим клиентам.
                </p>
                <a href="about2.html" className="btn btn-dark">Читать больше о нас</a>
            </div>
            <div className="text-center bg-img2 title">
                <h1>Апкайт</h1>
            </div>
        </div>
    </section>

    <section className="companies">
        <h2 className="md text-center my-2">
            Компании с которыми мы сотрудничаем
        </h2>
        <div className="container flex">
            <div className="card">
                <h4>Namyang</h4>
                <img src="/images/logos/namyang.png" alt=""/>
            </div>
            <div className="card">
                <h4>Nongshim</h4>
                <img src="images/logos/nongshim.png" alt=""/>
            </div>
            <div className="card">
                <h4>CJ</h4>
                <img src="images/logos/CJ.png" alt=""/>
            </div>
            <div className="card">
                <h4>Ottogi</h4>
                <img src="images/logos/ottogi.png" alt=""/>
            </div>
            <div className="card">
                <h4>Obok</h4>
                <img src="images/logos/" alt=""/>
            </div>
            <div className="card">
                <h4>Crown</h4>
                <img src="images/logos/crown.png" alt=""/>
            </div>
            <div className="card">
                <h4>Haitai</h4>
                <img src="images/logos/haitai.png" alt=""/>
            </div>

        </div>
    </section>
        </MainLayout>
        
    )
}

export default Index