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
        <div className="copyright">
            <Link href='/'><h3><a>Upkait</a></h3></Link>
            <p>Copyright &copy; 2021</p>
        </div>
        <div className="social">
            <Link href='/'><a><i className="fab fa-facebook fa-2x"></i></a></Link>
            <Link href='https://www.instagram.com/upkait__official/?igshid=l4kmse3783n0' >
                <a target="_blank"><i className="fab fa-instagram fa-2x"></i></a></Link>
        </div>
        <div>
            <nav>
                <ul>
                    <li className="pb-3">
                        <Link href='/'><h4><a>{t.Home}</a></h4></Link>
                    </li>
                    <li>
                        <Link href='/about'><h4><a>{t.About}</a> </h4></Link>
                    </li>
                    <li><Link href='/about#history'><a >{t.History}</a></Link></li>
                    <li><Link href='/about#map'><a >{t.Location}</a></Link></li>
                </ul>
            </nav>
        </div>
        <div>
            <nav>
                <ul>
                    <li>
                    <Link href='/products'><h4><a>{t.Product}</a></h4></Link>
                    </li>
                    <li><Link href={{pathname:'/products', query:{num:0}}}><a>{t.Ottogi}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:1}}}><a>{t.Nongshim}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:2}}}><a>{t.Namyang}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:3}}}><a>{t.Obok}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:4}}}><a>{t.CJ}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:5}}}><a>{t.Haitai}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:6}}}><a>{t.Crown}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:7}}}><a>{t.Taeyang}</a></Link></li>
                    <li><Link href={{pathname:'/products', query:{num:8}}}><a>{t.Other}</a></Link></li>
                </ul>
            </nav>
        </div>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href='/recipes'><h4><a>{t.Recipes}</a></h4></Link>
                    </li>
                </ul>
            </nav>
        </div>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href='/contact'><h4> <a>{t.Contact}</a></h4></Link>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</footer>
   )
}

export default Footer