
import Head from 'next/head'
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
        </>
    )
}

export default MainLayout