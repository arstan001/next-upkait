import MainLayout from "../components/MainLayout";

function Contact(){
    return (
        <MainLayout>
            <section className="contact-head">
                <div className="container ">
                    <div className="grid-2 py-5">
                        <div className="contact-title">
                            <h1 className="md">Мы делаем все возможное для 100% удовлетворенности клиентов.</h1>
                            <p>Оставьте запрос и ответственное лицо свяжется с вами в самое ближайшее время.</p>
                        </div>
                        <div className="contact-title">
                            <h4>Главный офис во Пусане:</h4>
                            <p> Адрес: 6F, 226, Асиад-деро , Донае-гу, Пусан, Республика Корея(47837) <br/>
                                    Тел .: 051-557-6781 <br/>
                                    Факс: 051-556-0084 <br/>
                                    E-mail: izaccola@daum.net
                            </p>
                                <h4>Офис и склад во Владивостоке: </h4>
                                <p> Адрес: г. Владивосток, ул. Запорожская 77, офис 627 <br/>
                                    Тел.:+7-908-961-3591. <br/>
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
                                <input className="input-text" type="text" name="name" id="name"/>
                                <label for="name" className="label">Имя</label>
                            </div>
                            <div className="form-field col-lg-6">
                                <input className="input-text" type="email" name="email" id="email"/>
                                <label for="email" className="label">Электронная почта</label>
                            </div>
                            <div className="form-field col-lg-6">
                                <input className="input-text" type="text" name="company" id="company"/>
                                <label for="company" className="label">Наименование компании</label>
                            </div>
                            <div className="form-field col-lg-6">
                                <input className="input-text" type="text" name="phone" id="phone"/>
                                <label for="phone" className="label">Телефона</label>
                            </div>
                            <div className="form-field col-lg-12">
                                <input className="input-text" type="text" name="message" id="message"/>
                                <label for="message" className="label">Ваш запрос</label>
                            </div>
                            <div className="form-field col-lg-12">
                                <button className="submit-btn btn" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </section>
                <style jsx>{`
                .contact-head::after {
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
                
                .contact-head {
                    position: relative;
                }
                
                .contact-head > * {
                    z-index: 10;
                    position: relative;
                }
                .contact-head {
                    min-height: 400px;
                    background: url('/images/contact/contact-bg.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center;
                    position: relative;
                    width: 100%;
                    overflow: hidden;
                }
                
                
                .contact-head .contact_title {
                    position: relative;
                    top: 50%;
                    left: 15%;
                    -webkit-transform: translateY(-50%);
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                    z-index: 10;
                    font-size: 20px ;
                    font-weight: 600;
                }
                
                .contact_title h1 {
                    font-size: 60px;
                    font-weight: 600;
                    text-align: start;
                    position: relative;
                    z-index: 10;
                }
                .contact-head .grid {
                    align-items: flex-start;
                    gap: 40px
                }
                .contact-head img {
                    width: 300px;
                    justify-self: flex-end;
                }
                
                .contact-head .grid h4 {
                    font-size: 20px;
                    font-weight: bold;
                }
                
                .contact-head .grid p {
                    font-size: 16px;
                }
                
                .contact-head h1 {
                    font-weight: 400;
                }
                
                
                .get_in_touch {
                    max-width: 800px;
                    margin: 50px auto;
                    position: relative;
                    box-shadow: 0 10px 30px 0px rgba(0,0,0,0.1);
                    padding: 30px;
                }
                
                .get_in_touch .title {
                    text-transform: uppercase;
                    text-align: center;
                    letter-spacing: 3px;
                    font-size: 3em;
                    line-height: 48px;
                    padding-bottom: 20px;
                    color: var(--primary-color);
                    background: linear-gradient(to right, #f4524d 0%, var(--primary-color) 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
                
                .contact-form .form-field {
                    position: relative;
                    margin: 32px 0;
                }
                
                .contact-form .input-text {
                    display: block;
                    width: 100%;
                    height: 36px;
                    border-width: 0 0 2px 0;
                    border-color: var(--primary-color);
                    font-size: 18px;
                    line-height: 26px;
                    font-weight: 600;
                }
                .contact-form .input-message {
                    width: 100%;
                    height: 40px;
                    border-width: 2px;
                }
                
                .contact-form .input-text:focus + .label,
                .contact-form .input-text.not-empty + .label {
                    transform: translateY(-24px);
                }
                
                .contact-form .input-text:focus {
                    outline: none;
                }
                
                .contact-form .label {
                    position: absolute;
                    left: 20px;
                    bottom: 11px;
                    font-size: 18px;
                    line-height: 26px;
                    font-weight: 400;
                    color: var(--dark-color);
                    cursor: text;
                    text-transform: capitalize;
                    transition: transform 0.2s ease-in-out;
                }
                
                .contact-form .submit-btn {
                    width: 100%;
                    display: inline-block;
                    background-image: linear-gradient(125deg, #a72879, #064497);
                    color: #fff;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    font-size: 16px;
                    padding: 8px 16px;
                    border: none;
                    width: 200px;
                    cursor: pointer;
                }
                `}</style>
        </MainLayout>
    )
}

export default Contact