import Link from 'next/link'
import React from 'react'
import MainLayout from '../components/MainLayout'
import { withTranslation } from '../i18n'

function About({t}) {
    return (
        <MainLayout title={"About Page"}>
            <h1>This is an about page</h1>
            <Link href={'/about'}><a>{t("title")}</a></Link><br/>
            <Link href={'/posts'}><a>Posts</a></Link>
        </MainLayout>
    )
}


export default withTranslation()(About)