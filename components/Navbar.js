import Link from 'next/link'
import LanguageSwitcher from '../components/LanguageSwitcher'
import {Navbar, Nav} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

import { useRouter } from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'
function MyNavbar() {
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : ru
    return (
        <Navbar expand="lg" className="fixed-top">
            <div className="container">
            <Navbar><Link href="/"><><img src="./images/mainlogo.png" className="img-fluid" alt="UPKAIT"/>АПКАЙТ</></Link></Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav className="mx-3"><Link href={'/'}><a>{t.Home}</a></Link></Nav>
                    <Nav className="mx-3"><Link href={'/about'}><a>{t.About}</a></Link></Nav>
                    <Nav className="mx-3"><Link href={'/products'}><a>{t.Product}</a></Link></Nav>
                    <Nav className="mx-3"><Link href={'/recipes'}><a>{t.Recipes}</a></Link></Nav>
                    <Nav className="mx-3"><Link href={'/contact'}><a>{t.Contact}</a></Link></Nav>
                </Nav>
                <Nav className="ml-4 swtch">
                    <LanguageSwitcher/>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default MyNavbar