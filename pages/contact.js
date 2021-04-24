import MainLayout from "../components/MainLayout";
import { useRouter } from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'
import { useState } from "react";

function Contact() {
  const router = useRouter();
  const { locale } = router
  const t = locale === 'en' ? en : ru

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })
  const [inputs, setInputs] = useState({
    email: '',
    name: '',
    company: '',
    phone: '',
    message: '',

  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setInputs({
        email: '',
    name: '',
    company: '',
    phone: '',
    message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }
  const handleOnChange = (e) => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(inputs)
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <MainLayout>
      <section className="contact-head">
        <div className="container ">
          <div className="grid-2 py-5">
            <div className="contact-title">
              <h1 className="md">{t.contact_head_title}</h1>
              <p >{t.contact_head_subtitle}</p>
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

          <form onSubmit={handleOnSubmit} className="contact-form row">
            <div className="form-field col-lg-6">
              <input
                id="name"
                type="text"
                name="name"
                onChange={handleOnChange}
                required
                value={inputs.name}
                className="input-text"
              />
              <label htmlFor="name" className="label">{t.name}</label>
            </div>

          <div className="form-field col-lg-6">
            <input
              className="input-text"
              id="email"
              type="email"
              name="email"
              onChange={handleOnChange}
              required
              value={inputs.email}
            />
            <label htmlFor="email" className="label">{t.email}</label>
            </div>

            <div className="form-field col-lg-6">
            <input
              className="input-text"
              id="company"
              type="text"
              name="company"
              onChange={handleOnChange}
              required
              value={inputs.company}
            />
             <label htmlFor="company" className="label">{t.company}</label>
            </div>

            <div className="form-field col-lg-6">
            <input
              className="input-text"
              id="phone"
              type="number"
              name="phone"
              onChange={handleOnChange}
              required
              value={inputs.phone}
            />
            <label htmlFor="phone" className="label">{t.phone}</label>
            </div>

            <div className="form-field col-lg-6">
            <input
            className="input-text"
              id="message"
              name="message"
              onChange={handleOnChange}
              required
              type="text"
              value={inputs.message}
            />
            <label htmlFor="message" className="label">{t.message}</label>
            </div>

            <div className="form-field col-lg-12">
              <button type="submit" disabled={status.submitting} className="submit-btn btn">
                {!status.submitting
                  ? !status.submitted
                    ? t.Submit
                    : t.Submitted
                  : t.Submitting}
              </button>
              {status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      {/* {!status.info.error && status.info.msg && (
        <div className="success">{status.info.msg}</div>
      )} */}
            </div>
          </form>
        </div>
      </section>
      
    </MainLayout>
  )
}

export default Contact