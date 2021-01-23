import { RichText } from 'prismic-reactjs'
import { Link, withTranslation } from '../../i18n'
import { Client } from '../../prismic-configuration'
import  MainLayout  from '../components/MainLayout'

function Product({t, props}){
  
    return <MainLayout title={'S Post Page'}>
    <h3>{RichText.render(props.itemtitle)}</h3>
    
    <hr/>
    <img src={props.itemimage} alt="loading"/>
    <Link href={'/products'}><a>Back to all products</a></Link>
    </MainLayout>
    
}

export default withTranslation('common')(Product)

// export async function getServerSideProps (context) {

//     const product = await Client().query(
//         Prismic.Predicates.at("document.type", "products"),{

//         }
//     )
//     return {
//         product
//     }
// }