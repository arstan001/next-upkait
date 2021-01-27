import '../styles/global/global.css'
function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps}/> 
            
        </>
        )
}

MyApp.getStaticProps = async ({Component, ctx}) =>{
    let pageProps = {}

    if (Component.getInitialProps){
        pageProps = await Component.getStaticProps(ctx)
    }
    
    return {
        pageProps
    }
}

export default MyApp