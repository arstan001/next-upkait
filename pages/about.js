import Link from 'next/link'
import React from 'react'
import MainLayout from '../components/MainLayout'
import { useRouter} from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'
function About() {
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : ru
    return (
        <MainLayout title={"About Page"}>
            <h1>This is an about page</h1>
            <Link href={'/about'}><a>{t.title}</a></Link><br/>
            <Link href={'/posts'}><a>Posts</a></Link>
        </MainLayout>
    )
}


export default About