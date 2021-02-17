import Link from 'next/link'
// import LanguageSwitcher from '../components/LanguageSwitcher'
// import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import en from '../locales/en'
import { useRouter } from 'next/router'
import ru from '../locales/ru'
function Footer(){
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : ru
   return(
    <footer className="footer bg-dark py-5">
    <div className="container grid grid-4">
        <div>
            <Link href='/'><h3><a>Upkait</a></h3></Link>
            <p>Copyright &copy; 2021</p>
        </div>
        <div className="social">
            <Link href='/'><a><i className="fab fa-facebook fa-2x"></i></a></Link>
            <Link href='/'><a><i className="fab fa-instagram fa-2x"></i></a></Link>
        </div>
        <div>
            <nav>
                <ul>
                    <li className="pb-3">
                        <Link href='/'><h4><a>Главная</a></h4></Link>
                    </li>
                    <li>
                        <Link href='/'><h4><a>О нас</a> </h4></Link>
                    </li>
                    <li><Link href='/'><a >О компании</a></Link></li>
                    <li><Link href='/'><a >История</a></Link></li>
                    <li><Link href='/'><a >Локация</a></Link></li>
                </ul>
            </nav>
        </div>
        <div>
            <nav>
                <ul>
                    <li>
                    <Link href='/products'><h4><a>Продукты</a></h4></Link>
                    </li>
                    <li><Link href={{pathname:'/products', query:{num:2}}}><a>{t.Namyang}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:0}}}><a>{t.Nongshim}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:6}}}><a>{t.CJ}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:7}}}><a>{t.Ottogi}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:5}}}><a>{t.Obok}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:3}}}><a>{t.Crown}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:4}}}><a>{t.Haitai}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:1}}}><a>{t.Others}</a></Link></li>
                </ul>
            </nav>
        </div>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href='/recipes'><h4><a>Рецепты</a></h4></Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href='/contact'><h4> <a>Контакты</a></h4></Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</footer>
   )
}

export default Footer