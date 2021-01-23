import { withTranslation } from "../i18n.js"
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

MainLayout.getInitialProps = async () => ({
    namespaceRequired: ['common', 'posts']
}
)

export default withTranslation('common')(MainLayout)