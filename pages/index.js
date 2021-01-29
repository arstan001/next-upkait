import { useRouter } from 'next/router'
import React from 'react'
import MainLayout from '../components/MainLayout'
import en from '../locales/en'
import ru from '../locales/ru'
import Link from 'next/link'

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
                        <img src="/images/home-bg.png" className="img-fluid" width="300px" alt="" />
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

            <section className="cli">
                <div className="container grid">

                </div>
            </section>

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
                    <div className="card">
                        <h4>Namyang</h4>
                        <img src="/images/logos/namyang.png" alt="" />
                    </div>
                    <div className="card">
                        <h4>Nongshim</h4>
                        <img src="images/logos/nongshim.png" alt="" />
                    </div>
                    <div className="card">
                        <h4>CJ</h4>
                        <img src="images/logos/CJ.png" alt="" />
                    </div>
                    <div className="card">
                        <h4>Ottogi</h4>
                        <img src="images/logos/ottogi.png" alt="" />
                    </div>
                    <div className="card">
                        <h4>Obok</h4>
                        <img src="images/logos/" alt="" />
                    </div>
                    <div className="card">
                        <h4>Crown</h4>
                        <img src="images/logos/crown.png" alt="" />
                    </div>
                    <div className="card">
                        <h4>Haitai</h4>
                        <img src="images/logos/haitai.png" alt="" />
                    </div>
                </div>
            </section>
        </MainLayout>
        
    )
}

export default Index