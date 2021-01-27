
import Head from 'next/head'
import Footer from './Footer'
import MyNavbar from './Navbar'

function MainLayout({children, title = 'Next Course'}){
    return (
        <>
        <Head>
        <title>{title}</title>
        </Head>
        <MyNavbar/>
            <main>
                {children}
            </main>
        <Footer/>
        </>
    )
}

export default MainLayout