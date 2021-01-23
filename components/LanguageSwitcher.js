import { i18n } from '../i18n'
import { useContext } from 'react'
import { I18nContext } from 'next-i18next'

function LanguageSwitcher() {
    const { i18n: { language }} = useContext(I18nContext)
    return(
        <>
        <button type="button" onClick={()=> i18n.changeLanguage('ru')} className={language === 'ru' ? 'is-active' : ''}>RU</button>
        <button type="button" onClick={()=> i18n.changeLanguage('en')} className={language === 'en' ? 'is-active' : ""}>EN</button>
        </>
    )
}

export default LanguageSwitcher