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
                <div className="container">
                    <div className="row align-items-center">
                    <div className="col-8">
                        <h1>{t.title}</h1>
                        <p>{t.titlep}</p>
                        <Link href="/products"><a className="btn btn-outline">{t.titlebuttontext}</a></Link>
                    </div>
                    <div className="col-4">
                        <img src="/images/home-bg.png" className="img-fluid" width="300px"alt=""/>
                    </div>
                    </div>
                </div>
            </section>
            <section className="intro ">
                <div className="container d-flex align-items-center text-center">         
                    <p className="fs-3">
                        {t.intro}
                    </p>
                </div>
            </section>
            <section className="whyus">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-8">
                            <h1>{t.whyustitle}</h1>
                            <p>{t.whyus}</p>
                            <Link href="/about"><a class="btn btn-dark mt-3">{t.whyusmore}</a></Link>
                        </div>
                        <div className="col-4">
                            <h1 className="font-weight-bold display-1">UPKAIT</h1>
                        </div>

                    </div>
                </div>
            </section>
            <section className="companies">
                <div className="pt-5 align-items-center container">
                <header className="takefullwidth col-12">
                    <h1>{t.companytitle}</h1>
                </header>
                <main>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                    </Card.Body>
                </Card>
                </main>
                </div>
            </section>
            <style jsx>{`
            .takefullheight{
                height:100%;
            }
            .takefullwidth{
                width:100%;
            }
            .showcase{
                height:500px;
                width:100%;
                background-color: rgb(218, 208, 208);
            }
            .showcase h1{
                font-size:60px;
                font-weight:600;
            }
            .showcase p{
                font-size:24px;
                font-weight:500;
            }
            .row{
                height:100%;
            }
            .intro {
                display:flex;
                height:300px;
            }
            .intro p {
                font-size:28px;
            }
            .whyus{
                height:345px;
                background-color:#ecd5d58a;
                text-align:center;
            }
            .whyus h1{
                font-size:48px;
            }
            .whyus p{
                line-height:1.6;
                font-size:16px;
                margin:0;
            }
            .whyus button{
                text-decoration:underline;
            }
            .companies {
                align-items:center;
                height:300px;
                text-align:center;
            }
            .companies main {
                display:flex;
                justify-content:center;
            }
            `
             }</style>
        </MainLayout>
        
    )
}

export default Index