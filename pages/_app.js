
function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps}/> 
            <style jsx global>
            {`
            @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,200;0,300;0,400;0,600;0,700;1,300&display=swap');
            :root {
                --primary-color: #77bfa3;
                --secondary-color: #22223b;
                --dark-color: #333;
                --light-color: #837d7d;
                --success-color: #5cb85c;
                --error-color: #d9534f;
            
            }
            body {
                font-family: 'Source Sans Pro', sans-serif;
                color: #333;
                line-height: 1.6;
            }
            .container {
                max-width: 1100px;
                margin: 0 auto;
                height:100%;
                padding: 0 40px;
            }
            .navbar {
                background-color: var(--primary-color);
                /* color: #fff; */
                min-height: 70px;
                overflow:hidden;
            }
            p{
                font-size: 14px;
                line-height: 1;
            }
            a {
                text-decoration: none;
                color: #333;
            }
            .is-active{
                color:white;
            }
            .navbar-expand-md .navbar-nav .nav-link.active {
                color: #fff;
                border-bottom: 2px solid #fff;
                -webkit-transition:  0.5s ease-in-out;
                transition:  0.5s ease-in-out;
            }
            button {
                border:none;
                background:none;
            } 
            .my h1{
                font-size:16px;
                margin-bottom:0;
            }
            .my p{
                font-size:16px;
                margin-bottom:0;
            }  
            .myHeader p{
                font-size:1.5rem;
                font-weight: bold;
            }      
            td {
                align-items:center;
            }
            
            .btn {
                display: inline-block;
                cursor: pointer;
                padding: 10px 30px;
                background-color: var(--dark-color);
                color: #fff;
                border: none;
                border-radius: 5px;
            }
            .btn-dark {
                background-color: var(--secondary-color);
                color: #fff;
            }
            .btn-dark a {
                color: #fff;
            }
            
            .btn-outline {
                background-color: transparent;
                border: 1px #fff solid;
            }
            
            .btn-outline:hover {
                background-color: #333;
                color: #fff;
                border: 1px #fff solid;
            }
            
            .btn:hover{
                transform: scale(0.98);
            }
            
            `}</style>
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