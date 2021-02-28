import Link from 'next/link'
import React from 'react'
import MainLayout from '../components/MainLayout'
import { useRouter} from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'



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
                        <p>{t.about_sub_text2} </p>
                        <p> {t.about_sub_text3} </p>
                        <p id="history"> {t.about_sub_text4} </p>
                        <p > {t.about_sub_text5}</p>

                    </div>
                </div>
            </section>
            <section className="timeline" >
                <h1 >{t.History}</h1>
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
                <div className="container grid about-map">
                    <div>
                        <h6>{t.busan_office}</h6>
                        <p id="map">{t.busan_address1}</p>
                        <p>{t.busan_address2}</p>
                            <div className=" bg-light p-3">
                                <a href="https://www.google.com/maps/place/%EB%B6%80%EC%82%B0%EA%B4%91%EC%97%AD%EC%8B%9C+%EB%8F%99%EB%9E%98%EA%B5%AC+%EC%98%A8%EC%B2%9C3%EB%8F%99+%EC%95%84%EC%8B%9C%EC%95%84%EB%93%9C%EB%8C%80%EB%A1%9C+226/@35.2038782,129.0650998,17z/data=!3m1!4b1!4m13!1m7!3m6!1s0x3568949c3d3ac82f:0xb119dafc883950a5!2z67aA7IKw6rSR7Jet7IucIOuPmeuemOq1rCDsmKjsspwz64-ZIOyVhOyLnOyVhOuTnOuMgOuhnCAyMjY!3b1!8m2!3d35.2038782!4d129.0672885!3m4!1s0x3568949c3d3ac82f:0xb119dafc883950a5!8m2!3d35.2038782!4d129.0672885"><img src="./images/about/busan.png" alt="" /></a>
                            </div>
                    </div>
                    <div>
                        <h6>{t.russian_office}</h6>
                        <p>{t.russian_address1}</p>
                        <p>{t.russian_address2}</p>
                        <div className=" bg-light p-3">
                            <a href="https://www.google.com/maps/place/%D0%97%D0%B0%D0%BF%D0%BE%D1%80%D0%BE%D0%B6%D1%81%D0%BA%D0%B0%D1%8F+%D1%83%D0%BB.,+77%D0%B0,+627,+%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%B2%D0%BE%D1%81%D1%82%D0%BE%D0%BA,+%D0%9F%D1%80%D0%B8%D0%BC%D0%BE%D1%80%D1%81%D0%BA%D0%B8%D0%B9+%D0%BA%D1%80%D0%B0%D0%B9,+%D0%A0%D0%BE%D1%81%D1%81%D0%B8%D1%8F,+690021/@43.100781,131.9000623,17z/data=!3m1!4b1!4m5!3m4!1s0x5fb38d9b2330a5f1:0x4b7021627553c3f0!8m2!3d43.100781!4d131.902251"><img src="./images/about/vlad.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout >
    )
}


export default About