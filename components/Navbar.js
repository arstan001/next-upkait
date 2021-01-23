import { Link, withTranslation } from '../i18n'
import LanguageSwitcher from '../components/LanguageSwitcher'
import {Navbar, Nav, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
function MyNavbar({ t }) {
    return (
        <Navbar expand="lg">
            <div className="container">
            <Navbar><Link href="/"><img src="./images/brand.gif" height="56px" alt="UPKAIT"/></Link></Navbar>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav className="mx-3"><Link href={'/'}><a>{t('Home')}</a></Link></Nav>
                    <Nav className="mx-3"><Link href={'/about'}><a>{t('About')}</a></Link></Nav>
                    <Nav className="mx-3"><Link href={'/products'}><a>{t('Product')}</a></Link></Nav>
                    <Nav className="mx-3"><Link href={'/recipes'}><a>{t('Recipes')}</a></Link></Nav>
                    <Nav className="mx-3"><Link href={'/contact'}><a>{t('Contact')}</a></Link></Nav>
                </Nav>
                <Nav className="ml-4">
                    <LanguageSwitcher/>
                </Nav>
            </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default withTranslation()(MyNavbar)