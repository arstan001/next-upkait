import MainLayout from "../components/MainLayout";

function Contact() {
    return (
        <MainLayout>
            <section className="contact-head">
                <div className="container ">
                    <div className="grid-2 py-5 text">
                        <div className="contact-title">
                            <h1 className="md">Мы делаем все возможное для 100% удовлетворенности клиентов.</h1>
                            <p>Оставьте запрос и ответственное лицо свяжется с вами в самое ближайшее время.</p>
                        </div>
                        <div className="contact-title">
                            <h4>Главный офис во Пусане:</h4>
                            <p> Адрес: 6F, 226, Асиад-деро , Донае-гу, Пусан, Республика Корея(47837) <br />
                                    Тел .: 051-557-6781 <br />
                                    Факс: 051-556-0084 <br />
                                    E-mail: izaccola@daum.net
                            </p>
                            <h4>Офис и склад во Владивостоке: </h4>
                            <p> Адрес: г. Владивосток, ул. Запорожская 77, офис 627 <br />
                                    Тел.:+7-908-961-3591. <br />
                                    E-mail: lyuda_kim73@mail.ru
                                </p>
                        </div>
                        <div className="overlay"></div>
                    </div>
                </div>
            </section>

            <section className="get_in_touch">
                <h1 className="title">Оставить запрос</h1>
                <div className="container">
                    <form className="contact-form row">
                        <div className="form-field col-lg-6">
                            <input className="input-text" type="text" name="name" id="name" />
                            <label for="name" className="label">Имя</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input className="input-text" type="email" name="email" id="email" />
                            <label for="email" className="label">Электронная почта</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input className="input-text" type="text" name="company" id="company" />
                            <label for="company" className="label">Наименование компании</label>
                        </div>
                        <div className="form-field col-lg-6">
                            <input className="input-text" type="text" name="phone" id="phone" />
                            <label for="phone" className="label">Телефона</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <input className="input-text" type="text" name="message" id="message" />
                            <label for="message" className="label">Ваш запрос</label>
                        </div>
                        <div className="form-field col-lg-12">
                            <button className="submit-btn btn" type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </section>
            <style jsx>{`
            
                `}</style>
        </MainLayout>
    )
}

export default Contact