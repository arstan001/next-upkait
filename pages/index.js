import React from 'react'
import MainLayout from '../components/MainLayout'
import { Link, withTranslation } from '../i18n'

function Index({t}) {
    return (
        <MainLayout title={"Home Page"}>
            <section className="showcase">
                <div className="container row">
                    <div className="col-6">
                        <h1>{t("Title")}</h1>
                        <p>{t('Titlep')}</p>
                        <Link href="/products"><a className="btn btn-outline">{t('Titlebuttontext')}</a></Link>
                    </div>
                    <div className="col-6">
                        <img src="/images/home-bg.png" className="img-fluid" width="300px"alt=""/>
                    </div>
                </div>
            </section>
            <style jsx>{`
            .showcase{
                height:600px;
                width:100%;
            }
            .showcase h1{
                font-size:60px;
            }
            
            `
             }</style>
        </MainLayout>
        
    )
}

export default withTranslation()(Index)