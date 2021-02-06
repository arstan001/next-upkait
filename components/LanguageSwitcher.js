import { useRouter } from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'
function LanguageSwitcher() {
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : ru
    const changeLanguage = (e) => {
        const locale = e.target.value
        router.push(router.pathname, router.pathname, { locale })
    }
    return(
        <>  
        <select 
            onChange={changeLanguage}
            defaultValue={locale}
        >
            <option value="en">EN</option>
            <option value="ru">RU</option>
        </select>

        <style jsx>
            {`
              select {
                  border: none;
                  outline:none;
                  background-color:transparent;
                  border-radius:1px;
                  color:white;  
              }
              select:active{
                  outline:none;
                  border:none;
              }
              option {
                  background-color:#ffcc00;
              }
            `}
        </style>
        </>
    )
}

export default LanguageSwitcher