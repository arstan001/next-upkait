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
                        <h1>{t.brand_low}</h1>
                        <p>{t.about_head}</p>
                    </div>
                    <div className="overlay"></div>
                </div>
            </section>
            <section className="about-sub-head bg-light py-3">
                <div className="container flex">
                    <div>
                        <h1 className="md">{t.about_sub_title}</h1>
                        <p> {t.about_sub_text1}
                    </p>
                        <p>{t.about_sub_text2}</p>
                    </div>
                </div>
            </section>
            <section className="timeline">
                <h1>{t.History}</h1>
                <div className="container">
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">1993</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle1}</h4>
                                <p>{t.timetitle1_text}
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">{t.time2}</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle2}</h4>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">{t.time3}</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle3}</h4>
                                <p>{t.timetitle3_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">{t.time4}</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle4}</h4>
                                <p>{t.timetitle4_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">2001</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle5}</h4>
                                <p>{t.timetitle5_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">{t.time6}</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle6}</h4>
                                <p>{t.timetitle6_text}
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">2002</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle7}</h4>
                                <p>{t.timetitle7_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">2004</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle8}</h4>
                                <p>{t.timetitle8_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">2006</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle9}</h4>
                                <p>{t.timetitle9_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">{t.time10}</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle10}</h4>
                                <p>{t.timetitle10_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">{t.time11}</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle11}</h4>
                                <p>{t.timetitle11_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">{t.time12}</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle12}</h4>
                                <p>{t.timetitle12_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">{t.time13}</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle13}</h4>
                                <p>{t.timetitle13_text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="timeline-body">
                        <div className="timeline-item">
                            <p className="time">{t.time14}</p>
                            <div className="content">
                                <h4 className="title">{t.timetitle14}</h4>
                                <p>{t.timetitle14_text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="about-sub-head bg-light py-3">
                <div className="container grid">
                    <div>
                        <p>
                            {t.busan_address}
                        </p>
                            <div className=" bg-light p-3">
                                <img src="./images/about/busan.png" alt="" />
                            </div>
                        
                    </div>
                    <div>
                        <p>{t.russian_address}</p>
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