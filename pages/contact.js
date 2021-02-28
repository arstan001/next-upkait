import MainLayout from "../components/MainLayout";
import { useRouter} from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'
function Contact(){
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : ru
    const handleSubmit = ()=>{
        
    }
    return (
        <MainLayout>
            <section className="contact-head">
                <div className="container ">
                    <div className="grid-2 py-5">
                        <div className="contact-title">
                            <h1 className="md">{t.contact_head_title}</h1>
                            <p>{t.contact_head_text}</p>
                        </div>
                        <div className="contact-title">
                            <h4>{t.contact_busan}</h4>
                            <p>{t.contact_busan_address1}</p>
                            <p>{t.contact_busan_address2}</p>

                            <h4>{t.contact_russia}</h4>
                            <p>{t.contact_russian_address1}</p>
                            <p>{t.contact_russian_address2}</p>

                            </div>
                            <div className="overlay"></div>
                        </div>
                    </div>
            </section>

                <section className="get_in_touch">
                    <h1 className="title">{t.form_title}</h1>
                    <div className="container">
                        <form className="contact-form row" onSubmit={(e)=>handleSubmit}>
                            <div className="form-field col-lg-6">
                                <input className="input-text" type="text" name="name" id="name" required/>
                                <label for="name" className="label">{t.name}</label>
                            </div>
                            <div className="form-field col-lg-6">
                                <input className="input-text" type="email" name="email" id="email" required/>
                                <label for="email" className="label">{t.email}</label>
                            </div>
                            <div className="form-field col-lg-6">
                                <input className="input-text" type="text" name="company" id="company" required/>
                                <label for="company" className="label">{t.company}</label>
                            </div>
                            <div className="form-field col-lg-6">
                                <input className="input-text" type="text" name="phone" id="phone" required/>
                                <label for="phone" className="label">{t.phone}</label>
                            </div>
                            <div className="form-field col-lg-12">
                                <input className="input-text" type="text" name="message" id="message" required/>
                                <label for="message" className="label">{t.message}</label>
                            </div>
                            <div className="form-field col-lg-12">
                                <button className="submit-btn btn" type="submit">{t.send}</button>
                            </div>
                        </form>
                    </div>
                </section>
        </MainLayout>
    )
}

export default Contact