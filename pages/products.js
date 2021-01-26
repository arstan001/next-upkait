import MainLayout from '../components/MainLayout'
import {useEffect, useState} from 'react'
import { Client } from '../prismic-configuration'
import Prismic from 'prismic-javascript'
import { RichText } from 'prismic-reactjs'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter} from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'
function Products({product,producten}){
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : ru
    
    var disproduct = locale === 'en' ? producten : product
    useEffect(()=>{
        setCompany(0)
    },[locale])
    const [company, setCompany] = useState(0)
    const [productobject, setProductobject] = useState({})
    const [isdisplayed, setIsisplayed] = useState(false)
    return(
        <MainLayout>
            <div className="container">
                <header className="text-center mt-4">
                    <h1 className="mb-4">{t.Product}</h1>
                    <hr/>
                </header>
                <section className="row">
                    <div className="col-2 companyblock">
                        <button onClick={()=>setCompany(0)} className={company===0 ? "active" : ""}>{RichText.render(disproduct.results[0].data.item[0].itemcompany)}</button>
                        <hr/>
                        <button onClick={()=>setCompany(1)} className={company===1 ? "active" : ""}>{RichText.render(disproduct.results[1].data.item[0].itemcompany)}</button>
                        <hr/>  
                        <button onClick={()=>setCompany(2)} className={company===2 ? "active" : ""}>{RichText.render(disproduct.results[2].data.item[0].itemcompany)}</button>
                        <hr/>
                        <button onClick={()=>setCompany(3)} className={company===3 ? "active" : ""}>{RichText.render(disproduct.results[3].data.item[0].itemcompany)}</button>
                        <hr/>
                    </div>
                    <div className="col-1"></div>
                    <div className="col-9 products">
                        
                        {disproduct.results[company].data.item.map((item,index)=>
                        <div className="productcard" key={index}>
                             <a onClick={()=>{
                                   setProductobject(item)
                                   setIsisplayed(true)
                               }}><div className="imagewrapperr">
                                <img src={item.itemimage.url} alt="loading"/>
                            </div>
                           <p>{item.itemtitle[0].text}</p></a>
                        </div>
                        )}
                            
                    </div>
                </section>
            </div>
            <div className={isdisplayed===true ? "productdetail" : "productdetain d-none"}>
                <button className="myButton" onClick={()=>setIsisplayed(false)}>x</button>
                <div className="row flex align-items-center">
                    <div className="col-6 text-center align-middle">
                        <img className="img-fluid mt-2"  src={isdisplayed === true ? productobject.itemimage.url : ""} alt="loading"/>
                    </div>
                    <div className="col-6">
                        <header className="myHeader">
                            {isdisplayed===true ? RichText.render(productobject.itemtitle) : ""}
                        </header>
                        <main>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>{t.category}:</td>
                                        <td className="my">{isdisplayed===true ? RichText.render(productobject.itemcategory) : ""}</td>
                                    </tr>
                                    <tr>
                                        <td>{t.weight}:</td>
                                        <td className="my">{isdisplayed===true ? RichText.render(productobject.itemweight):""}</td>
                                    </tr>
                                    <tr>
                                        <td>{t.company}:</td>
                                        <td className="my">{isdisplayed===true ? RichText.render(productobject.itemcompany) : ""}</td>
                                    </tr>
                                    <tr>
                                        <td>{t.expiration}:</td>
                                        <td className="my">{isdisplayed===true ? RichText.render(productobject.itemexpiration) : ""}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </main>
                    </div>
                </div>
            </div>
        <style jsx>{`
            .companyblock{
                display:block;
                border-radius: 5px;
                padding-top:16px;
            }
            .companyblock button{
                font-size:14px;
            }
            .companyblock .active{
                font-weight:bold;
            }
            .products{
                display:flex;
                flex-wrap: wrap;
                width: 100%;
                height: 600px;
                padding: 0;
                justify-content: space-between;
            }
            .productcard{
                margin:4px;
                overflow:hidden;
                text-align:center;
                height:200px;
                width: 180px;
                padding:12px;
                border-radius: 4px;
                border:1px solid rgb(220,220,220, 0.5);
            }
            .productcard a{
                cursor: pointer;
            }
            .productcard a:hover{
                font-weight:bold;
                color:black;
            }
            .imagewrapperr{
                position: relative;
                text-align:center;
                align-items:center;
                justify-content:center;
                display:flex;
                height: 130px;
                width: 100%;
                margin-bottom:5px;
            }
            .imagewrapperr img{
                width: auto;
                height: auto;
                max-width: 100%;
                max-height: 100%
            }
            .productdetail{
                position:fixed;
                display:flex;
                justify-content: space-around;
                background-color:white;
                top:50%;
                left:60%;
                width:800px;
                height:560px;
                margin-left:-455px;
                margin-top:-280px;
                border:1px solid  #f3f3f3;
                border-radius:10px;
            }
            .productdetail .row{
                width:100%;
            }
            .productdetail img {
                max-height:280px;
                width:auto;
            }
            .productdetail table tbody tr td:first-of-type{
            
                padding-right:12px;
            }
            .myButton{
                position:absolute;
                top:10px;
                right:10px;
                height:24px;
                width:24px;
                align-items:center;
                display:flex;
                justify-content:center;
                border: 1px solid black;
                border-radius: 20px;
            }
        `}  
        </style>
        </MainLayout>
        
    )
}


export async function getServerSideProps(){
    const product = await Client().query(
        Prismic.Predicates.at("document.type", "products")
    )
    const producten = await Client().query(
        Prismic.Predicates.at("document.type", "products"),
        {lang:'en-us'}
    )
    return {
        props:{
            product:product,
            producten: producten
        }
    }
}
export default Products


