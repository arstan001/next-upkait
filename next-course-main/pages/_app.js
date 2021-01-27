
function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <style jsx global>
                {`
.container {
    max-width: 1100px;
    margin: 0 auto;
    overflow: auto;
    padding: 0 40px;
}

.card {
    background-color: #fff;
    color: #333;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0,0,0, 0.2);
    padding: 20px;
    margin: 20px;
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

/* Backgrounds & colored buttons */
.bg-primary,
.btn-primary {
    background-color: var(--primary-color);
    color: #fff;
}

.bg-secondary,
.btn-secondary {
    background-color: var(--secondary-color);
    color: #fff;
}

.bg-dark,
.btn-dark {
    background-color: var(--secondary-color);
    color: #fff;
}

.bg-light,
.btn-light {
    background-color: var(--light-color);
    color: #333;
}

.bg-primary a,
.btn-primary a,
.bg-secondary a,
.btn-secondary a,
.bg-dark a,
.btn-dark a {
    color: #fff;
}

/* Test Colors */

.text-primary {
    color: var(--primary-color);
}

.text-secondary {
    color: var(--secondary-color);
}

.text-dark {
    color: var(--dark-color);
}

.text-light {
    color: var(--light-color);
}

/* Text sizes */
.lead {
    font-size: 20px;
}

.sm {
    font-size: 1rem;
}

.md {
    font-size: 2rem;
}

.lg {
    font-size: 3rem;
}

.xl {
    font-size: 4rem;
}

.text-center {
    text-align: center;
}

/* Alert */
.alert {
    background-color: var(--light-color);
    padding: 10px 20px;
    font-weight: bold;
    margin: 15px 0;
}

.alert i {
    margin-right: 10px;
}

.alert-success {
    background-color: var(--success-color);
    color: #fff;
}

.alert-error {
    background-color: var(--error-color);
    color: #fff;
}


.flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

}

.grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.grid-2 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    justify-content: center;
    align-items: center;
    height: 100%;
}


.grid-3 {
    grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
    grid-template-columns: repeat(6, 1fr);
    align-items: flex-start;
}

.grid-4 h4 {
    font-size: 18px;
    font-weight: bold;
}

/* Margin */

.my-1 {
    margin: 1rem 0;
}

.my-2 {
    margin: 1.5rem 0;
}

.my-3 {
    margin: 2rem 0;
}

.my-4 {
    margin: 3rem 0;
}

.my-5 {
    margin: 4rem 0;
}

.m-1 {
    margin: 1rem;
}

.m-2 {
    margin: 1.5rem;
}

.m-3 {
    margin: 2rem;
}

.m-4 {
    margin: 3rem;
}

.m-5 {
    margin: 4rem;
}

/* Padding */

.py-1 {
    padding: 1rem 0;
}

.py-2 {
    padding: 1.5rem 0;
}

.py-3 {
    padding: 2rem 0;
}

.py-4 {
    padding: 3rem 0;
}

.py-5 {
    padding: 4rem 0;
}

.p-1 {
    padding: 1rem;
}

.p-2 {
    padding: 1.5rem;
}

.p-3 {
    padding: 2rem;
}

.p-4 {
    padding: 3rem;
}

.p-5 {
    padding: 4rem;
}

.pb-2 {
    padding: 0 0 1rem 0;
}

.pb-3{
    padding: 0 0 2rem 0;
}



        @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap');

        /*77bfa3*/
            
         :root {
                --primary-color: #77bfa3;
                --secondary-color: #22223b;
                --dark-color: #333;
                --light-color: #837d7d;
                --success-color: #5cb85c;
                --error-color: #d9534f;
            
            }
            * {
                box-sizing: border-box;
                padding: 0;
                margin:0;
            }
            
            body {
                font-family: Source Sans Pro, sans-serif;
                color: #333;
                line-height: 1.6;
            }
            
            ul {
                list-style-type: none;
            }
            
            a {
                text-decoration: none;
                color: #333;
            }
            
            h1,
            h2 {
                font-weight: 300;
                line-height: 1.2;
                margin: 10px 0;
            }
            
            p {
                margin: 10px 0;
            }
            
            img {
                width: 100%;
            }
            
            code, pre {
                background: #333;
                color: #fff;
                padding: 10px;
            }
            
            .hidden {
                visibility: hidden;
                height: 0;
            }
            
            .bg-color {
                background-color: var(--primary-color);
            }
            
            /* Navbar */
             .main-navbar {
                background-color: var(--primary-color);
            }
            .navbar {
                background-color: var(--primary-color);
               color: #fff; 
                min-height: 70px;
                overflow:hidden;
            }
            .navbar ul li a {
                /* color: #fff; */
                padding: 10px;
                margin: 0 5px;
                text-decoration: none;
            
            }
            
            .navbar ul {
                display:flex;
            } 
            
            .main-navbar img {
                width: 25vh;
            }
             
            .navbar-expand-lg .navbar-nav .nav-link:hover,
            .navbar-expand-lg .navbar-nav .nav-link.active {
                color: #fff;
                border-bottom: 2px solid #fff;
                -webkit-transition:  0.5s ease-in-out;
                transition:  0.5s ease-in-out;
            }
            
            .navbar .nav-item .nav-link:hover {
                color: #fff;
            }
            
            /* Showcase */
            
            .showcase::after {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                background-color: rgb(218, 208, 208);
                position: absolute;
                top: 0;
                left: 0;
                opacity: .7;
                z-index: 0;
            }
            
            .showcase {
                position: relative;
            }
            
            .showcase > * {
                z-index: 10;
                position: relative;
            }
            
            .showcase {
                min-height: 500px;
                background-image: url('/images/mainbg.jpeg');
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                width: 100%;
                position: relative;
            }
            
            
            .showcase .showcase-text {
                z-index: 2;
                position: relative;
                top: 50px;
            }
            
            .showcase .showcase-text h1{
                font-size: 60px;
                font-weight: 600;
                text-align: start;
            }
            
            .showcase .showcase-text p{
                font-size: 1.5em;
                font-weight: 500;
                text-align: start;
                line-height: 1.3;
            }
            
            
            .showcase-img img {
                position: relative;
                top: 100px;
                height: 400px;
                width: 400px;
                padding: 20px;
                z-index: 100;
                justify-self:self-end;
            }
            
            
            .showcase .grid {
                overflow: visible;
                grid-template-columns: 55% 45%;
                gap: 40px;
            }
            
            
            
            /* Intro */
            .intro {
                height: 200px;
                padding-top: 100px;
                animation: slideInFromBottom 1s ease-in;
            }
            
            
            
            /* CLI */
            .cli .grid {
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 1fr);
            }
            
            .cli .grid > *:first-child {
                grid-column: 1/span 2;
                grid-row:1 / span 2;
            }
            
            /* Why */
            
            .whyus::after {
             content: "";
             display: block;
             width: 100%;
             height: 100%;
             background-color: #ecd5d58a;
             position: absolute;
             top: 0;
             left: 0;
             opacity: .7;
             z-index: 0;
            }
            
            .whyus {
                position: relative;
            }
            
            .whyus > * {
                z-index: 10;
                position: relative;
            }
            section .whyus {
                min-height: 100px;   
                position: relative;
                margin: 0;
                padding: 0;
            }
            
            
            .whyus .grid {
                min-height: 200px ;
                grid-template-columns: 4fr 3fr;
                gap: 0;
                margin: 0 auto;
                padding: 0 auto;
            }
            
            
            .whyus .title h1 {
                text-align: center;
                font-size: 80px;
                font-weight: 600;
                position: relative;
                padding-top: 20px;
                position: relative;
            }
            
            .whyus .text h3  {
                text-align: center;
                font-size: 50px;
                font-weight: 500;
                position: relative;
            }
            
            .whyus .text p  {
                text-align: center;
                font-size: 1em;
                font-weight: 500;
                position: relative;
            }
            
            .whyus .btn {
                text-align: center;
                align-items: center;
                position: relative;
            }
            
            
            
            
            /* Companies */
            .companies .flex {
                flex-wrap: wrap;
            }
            
            .companies .card{
                text-align: center;
                margin: 18px 10px 40px;
                transition: transform 0.2s ease-in;
            }
            
            .companies .card h4 {
                font-size: 20px;
                margin-bottom: 10px;
            }
            
            .companies .card:hover {
                transform: translateY(-15px);
            
            }
            
            .companies .card img {
                width: 50px;
                align-self:center;
            }
            
            /* About */
            
            .about-head img {
                width: 200px;
                justify-self: flex-end;
            }
            
            // /* .about-sub-head img {
            //     width: 300px;
            //     justify-self: flex-end;
            // }  */

            .about-head::after {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                background-color: rgb(218, 208, 208);
                position: absolute;
                top: 0;
                left: 0;
                opacity: .7;
                z-index: 0;
            
            }
            
            .about-head {
                position: relative;
            }
            
            .about-head > * {
                z-index: 10;
                position: relative;
            }
            
            .about-head  {
                height: 400px;;
                background-image: url('/images/main.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                width: 100%;
            }
            
            .about-head .about_title {
                position: absolute;
                top: 50%;
                left: 10%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                font-size: 20px ;
                font-weight: 600;
            }
            .about-head .about_title h1 {
                font-size: 60px;
                font-weight: 600;
                text-align: start;
            }
            .about-head p {
                font-size: 20px;
                font-weight: 400;
                text-align: start;
            }
            
            
            
            .about-sub-head .container {
                overflow:hidden;
                min-height: 300px;
                width: 95;
            }
            
            .about-sub-head p {
                text-align: start;
                font-size: 1em;
                line-height: 1.5;
            }
            
            
            .timeline {
                max-width: 900px;
                margin: 0 auto;
                color: #fff;
                padding:10px;
            }
            
            .timeline .container {
                overflow: hidden;
            }
            .timeline h1,
            .about-sub-head h1 {
                color: var(--primary-color);
                text-align: start;
                font-size: 2rem;
                font-weight: bold;
            }
            
            .timeline-body {
                color: #333;
                position: relative;
                background-color:#e9e6e6;
                margin-left: 100px;
                border-radius: 0 8px 8px 0;
                padding: 5px 0;
            }
            
            .timeline-body:after {
                content: '';
                width: 4px;
                height: 100%;
                background-color: var(--secondary-color);
                position: absolute;
                left: -4px;
                top: 0;
            }
            .timeline .timeline-body .timeline-item {
                position: relative;
            }
            
            
            .timeline .timeline-body .timeline-item:after {
                content: '';
                width: 15px;
                height: 15px;
                border-radius: 50%;
                border: 4px solid #333;
                background-color: #333;
                position: absolute;
                left: -10px;
                top: 10px;
                z-index: 120;
            }
            
            .timeline .timeline-body .timeline-item .time {
                color: #333;
                position: absolute;
                left: -120px;
                top: 0px;
                opacity: 0.8;
                font-size: 16px;
                font-weight: bold;
            }
            
            .timeline .timeline-body .timeline-item .content {
                margin: 10px 20px;
                padding-bottom: 20px;
                border-bottom: 1px dashed #b4becb;
            }
            
            .timeline .timeline-item .content .title {
                font-weight: 300;
                margin-bottom: 15px;
                
            }
            
            
            .about-sub-head {
                    text-align: center;
                }
            


        /* Products */ 
        .products{
            display:flex;
            flex-wrap: wrap;
            width: 100%;
            height: 600px;
            padding: 0;
            height:auto;
            min-height:600px;
            height:auto !important; 
            justify-content: space-between;
        }
        .companyblock button h1{
            font-size:14px;
        }
        .companyblock .active h1{
            font-weight:bold;
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
            height:auto;
            min-height:600px;
            height:auto !important; 
            justify-content: space-between;
            margin-bottom:24px;
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
            
            /* Recipes */
            
            .recipes-main h3 {
                margin: 20px 0;
            }
            
            .recipes-main .grid {
                grid-template-columns: 1fr 2fr;
                align-items: flex-start;
            }
            
            .recipes-main nav li {
                font-size: 17px;
                padding-bottom: 5px;
                margin-bottom: 5px;
                border-bottom: 1px#ccc solid;
            }
            
            .recipes-main a:hover {
                font-weight: bold;
            }
            
            .recipes-head::after {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                background-color: rgb(218, 208, 208);
                position: absolute;
                top: 0;
                left: 0;
                opacity: .7;
                z-index: 0;
            
            }
            
            .recipes-head {
                position: relative;
            }
            
            .recipes-head > * {
                z-index: 10;
                position: relative;
            }
            
            .recipes-head {
                height: 400px;
                background-image: url('/images/recipes/kfood.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                position: relative;
                width: 100%;
            
            }
            
            .recipe_title {
                position: absolute;
                top: 50%;
                left: 15%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                z-index: 2;
                font-size: 20px ;
                font-weight: 600;
            }
            
            .recipe_title h1 {
                font-size: 60px;
                font-weight: 600;
                text-align: start;
            }
            
            /* .recipes-head .overlay {
                background: #0000008a;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 1;
            } */
            
            /*Contact */
            
            .contact-head::after {
                content: "";
                display: block;
                width: 100%;
                height: 100%;
                background-color: rgb(218, 208, 208);
                position: absolute;
                top: 0;
                left: 0;
                opacity: .7;
                z-index: 0;
            
            }
            
            .contact-head {
                position: relative;
            }
            
            .contact-head > * {
                z-index: 10;
                position: relative;
            }
            .contact-head {
                min-height: 400px;
                background: url('/images/contact/contact-bg.jpg');
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center;
                position: relative;
                width: 100%;
                overflow: hidden;
            }
            
            
            .contact-head .contact_title {
                position: relative;
                top: 50%;
                left: 15%;
                -webkit-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                transform: translateY(-50%);
                z-index: 10;
                font-size: 20px ;
                font-weight: 600;
            }
            
            .contact-title h1 {
                font-size: 2em;
                font-weight: 500;
                text-align: start;
                position: relative;
                z-index: 10;
            }

            
            /* Contact Form */
            
            .get_in_touch {
                max-width: 800px;
                margin: 50px auto;
                position: relative;
                box-shadow: 0 10px 30px 0px rgba(0,0,0,0.1);
                padding: 30px;
            }
            
            .get_in_touch .title {
                text-transform: uppercase;
                text-align: center;
                letter-spacing: 3px;
                font-size: 3em;
                line-height: 48px;
                padding-bottom: 20px;
                color: var(--primary-color);
                background: linear-gradient(to right, #f4524d 0%, var(--primary-color) 100%);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .contact-form .form-field {
                position: relative;
                margin: 32px 0;
            }
            
            .contact-form .input-text {
                display: block;
                width: 100%;
                height: 36px;
                border-width: 0 0 2px 0;
                border-color: var(--primary-color);
                font-size: 18px;
                line-height: 26px;
                font-weight: 600;
            }
            .contact-form .input-message {
                width: 100%;
                height: 40px;
                border-width: 2px;
            }
            
            .contact-form .input-text:focus + .label,
            .contact-form .input-text.not-empty + .label {
                transform: translateY(-24px);
            }
            
            .contact-form .input-text:focus {
                outline: none;
            }
            
            .contact-form .label {
                position: absolute;
                left: 20px;
                bottom: 11px;
                font-size: 18px;
                line-height: 26px;
                font-weight: 400;
                color: var(--dark-color);
                cursor: text;
                text-transform: capitalize;
                transition: transform 0.2s ease-in-out;
            }
            
            .contact-form .submit-btn {
                width: 100%;
                display: inline-block;
                background-image: linear-gradient(125deg, #a72879, #064497);
                color: #fff;
                text-transform: uppercase;
                letter-spacing: 2px;
                font-size: 16px;
                padding: 8px 16px;
                border: none;
                width: 200px;
                cursor: pointer;
            }
            
            
            /*Footer */
            
            .footer .social a {
                margin: 0 10px;
            }
            
            /* Tablets and under */
            @media only screen and (max-width: 768px) {
                .grid {
                    grid-template-columns: 1fr;
                    grid-template-rows: 1fr;    
                }
                .container{
                    background:red;
                    color:green;
                }
                .showcase {
                    height: auto;
                }
                .showcase-text {
                    text-align: center;
                    margin-top: 40px;
                    animation: slideInFromTop 1s ease-in;
                }
                .cli .grid > *:first-child {
                    grid-column: 1;
                    grid-row:1;
                }
            
                .about-head h1,
                .about-sub-head h1,
                .timeline h1,
                .contact-head,
                .recipes-head h1, p,
                .about-head .about_title h1{
                    text-align: center;
                }
            
                .about-head img,
                .about-sub-head img,
                .contact-head img,
                .recipes-head img {
                    justify-self: center;
                }
                .about-sub-head p {
                    font-size: 0.8em;
                }
            
                .features-main .grid > *:first-child,
                .features-main .grid > *:nth-child(2) {
                    grid-column: 1;
                } 
            }
            
            
         
            `}</style>
        </>
    )
}

MyApp.getStaticProps = async ({ Component, ctx }) => {
    let pageProps = {}

    if (Component.getInitialProps) {
        pageProps = await Component.getStaticProps(ctx)
    }

    return {
        pageProps
    }
}

export default MyApp