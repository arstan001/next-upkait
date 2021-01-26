import Link from 'next/link'
// import LanguageSwitcher from '../components/LanguageSwitcher'
// import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

// import { useRouter } from 'next/router'
// import en from '../locales/en'
// import ru from '../locales/ru'
// function MyNavbar() {
//     const router = useRouter();
//     const { locale } = router
//     const t = locale === 'en' ? en : ru
//     return (
//         <Navbar expand="lg">
//             <div className="container">
//             <Navbar><Link href="/"><img src="./images/brand.gif" height="56px" alt="UPKAIT"/></Link></Navbar>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//                 <Nav className="ml-auto">
//                     <Nav className="mx-3"><Link href={'/'}><a>{t.Home}</a></Link></Nav>
//                     <Nav className="mx-3"><Link href={'/about'}><a>{t.About}</a></Link></Nav>
//                     <Nav className="mx-3"><Link href={'/products'}><a>{t.Product}</a></Link></Nav>
//                     <Nav className="mx-3"><Link href={'/recipes'}><a>{t.Recipes}</a></Link></Nav>
//                     <Nav className="mx-3"><Link href={'/contact'}><a>{t.Contact}</a></Link></Nav>
//                 </Nav>
//                 <Nav className="ml-4">
//                     <LanguageSwitcher/>
//                 </Nav>
//             </Navbar.Collapse>
//             </div>
//         </Navbar>
//     )
// }

// export default MyNavbar

function Footer(){
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
                    <li><Link href='/'><a>Namyang</a></Link></li>
                    <li><Link href='/'><a>Nongshim</a></Link></li>
                    <li><Link href='/'><a>CJ</a></Link></li>
                    <li><Link href='/'><a>Ottogi</a></Link></li>
                    <li><Link href='/'><a>Obok</a></Link></li>
                    <li><Link href='/'><a>Crown</a></Link></li>
                    <li><Link href='/'><a>Haitai</a></Link></li>
                    <li><Link href='/'><a>Другие</a></Link></li>
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
    <style jsx>{`
    .grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .bg-dark a{
    color: white;
}
.footer{
    color:white;
}
ul{
    list-style-type: none;
}
    .footer .social a {
        margin: 0 10px;
    }
    .grid-4 {
        grid-template-columns: repeat(6, 1fr);
        align-items: flex-start;
    }
    
    `}</style>
</footer>
   )
}

export default Footer