import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../components/MainLayout'
import en from '../locales/en'
import ru from '../locales/ru'
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-elastic-carousel'; 
import Item from '../components/Item'


const breakPoints = [
    {width:1, itemToShow: 1},
    {width: 550, itemsToShow:2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4}

];


function Index() {
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : ru
    return (
        <MainLayout title={"Home Page"}>
            <section className="showcase">
                <div className="container grid">
                    <div className="showcase-text">
                        <h1>{t.title}</h1>
                        <p>{t.titlep}</p>
                        <Link href="/products"><a className="mbtn btn-outline">{t.titlebuttontext}</a></Link>
                    </div>
                    <div className="showcase-img">
                        <Carousel showArrows={false} enableAutoPlay={true} autoPlaySpeed={2500}>
                            <Item><img src="/images/newImages/OTTOGI.png" style={{width:600}} alt="" /></Item>
                            <Item><img src="/images/newImages/NONGSHIM.png" style={{width:600}}  alt="" /></Item>
                            <Item><img src="/images/newImages/NAMYANG2.png" style={{width:530}}  alt="" /></Item>
                            <Item><img src="/images/newImages/OBOK2.png" style={{width:560}}  alt="" /></Item>
                            <Item><img src="/images/newImages/CJ.png" style={{width:600}}  alt="" /></Item>
                            <Item><img src="/images/newImages/HAITAI CRWON.png" style={{width:600}}  alt="" /></Item>
                            <Item><img src="/images/newImages/기타2.png" style={{width:600}}  alt="" /></Item>


                        </Carousel>
                        {/* <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                            </ol>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="container1">
                                        <img src="/images/collection.png" className=" d-block w-100" alt="" />
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="container">
                                        <img src="/images/bg7.jpg" className=" d-block w-100" alt="" />
                                        </div>
                                    </div>
                                    <div className="carousel-item ">
                                        <div className="container">
                                        <img src="/images/collection.png" className="d-block w-100" alt="" />
                                        </div>
                                    </div>
                                   
                                </div> */}
                            {/* <a href="#myCarousel" className="carousel-control-prev" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a href="#myCarousel" className="carousel-control-next" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a> */}

{/*                             
                        </div>                  */}
                        
                    </div>
                </div>

            </section>
            <section className="intro ">
                <div className="container">
                    <h3 className="stats-heading text-center my-1">
                        {t.intro}
                    </h3>
                </div>
            </section>

            {/* <section className="cli">
                <div className="container grid">

                </div>
            </section> */}

            <section className="whyus my-5 py-5">
                <div className="container grid">
                    <div className="text-center img">
                        <h2 className="lg">{t.whyustitle}</h2>
                        <p>{t.whyus}</p>
                        <Link href="/about"><a className="btn btn-dark my-2">{t.whyusmore}</a></Link>
                    </div>
                    <div className="my-5 py-4 title">
                        <h1>UPKAIT</h1>
                    </div>
                </div>
            </section>

            <section className="companies mb-5">
                <h2 className="md text-center my-2" >{t.companytitle}</h2>

                <div className="container flex">
                    <div className="card" onClick={()=>router.push({pathname:'/products', query:{num:2}})}>
                        <h4>Namyang</h4>
                        <img src="/images/logos/namyang.png" alt="" />
                    </div>
                    <div className="card"  onClick={()=>router.push({pathname:'/products', query:{num:1}})}>
                        <h4>Nongshim</h4>
                        <img src="images/logos/nongshim.png" alt="" />
                    </div>
                    <div className="card" onClick={()=>router.push({pathname:'/products', query:{num:4}})}>
                        <h4>CJ</h4>
                        <img src="images/logos/CJ.png" alt="" />
                    </div>
                    <div className="card" onClick={()=>router.push({pathname:'/products', query:{num:0}})}>
                        <h4>Ottogi</h4>
                        <img src="images/logos/ottogi.png" alt="" />
                    </div>
                    <div className="card" onClick={()=>router.push({pathname:'/products', query:{num:3}})}>
                        <h4>Obok</h4>
                        <img src="images/logos/obok.jpeg" alt="" />
                    </div>
                    <div className="card" onClick={()=>router.push({pathname:'/products', query:{num:6}})}>
                        <h4>Crown</h4>
                        <img src="images/logos/crownimg.png" alt="" />
                    </div>
                    <div className="card" onClick={()=>router.push({pathname:'/products', query:{num:5}})}>
                        <h4>Haitai</h4>
                        <img src="images/logos/haitai.png" alt="" />
                    </div>
                </div>
            </section>

            <style jsx>
                {`
                
                .carousel-item {
                    height: 20rem;
                    position: relative;
                }

                .container1 {
                    position:absolute;
                    botton: 0;
                    left: 0;
                    right: 0; 
                    padding-bottom: 10px;
                }
                
                `}
            </style>
        </MainLayout>
        
    )
}

export default Index