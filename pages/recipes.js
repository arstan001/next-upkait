import MainLayout from "../components/MainLayout";
import { useRouter } from 'next/router'
import en from '../locales/en'
import ru from '../locales/ru'
function Recipes(){
    const router = useRouter();
    const { locale } = router
    const t = locale === 'en' ? en : ru
    return (
        <MainLayout>
<section className="recipes-head">
        <div className="container grid">
            <div className="recipe_title">
                <h1>{t.recipes_head_title}</h1>
                <p>{t.recipes_head_text}</p>
            </div>
            <div className="overlay"></div>
        </div>
    </section>

    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/recipe3.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="card">
                <h3>{t.recipe1_title}</h3>
                <p>{t.recipe1_text}</p>
            </div>
        </div>
    </section>
    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/recipe1.jpg" className="img-fluid"alt=""/>
            </div>
            <div className="card">
                <h3>{t.recipe2_title}</h3>
                <p>{t.recipe2_text}</p>
            </div>
        </div>
    </section>
    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/recipe2.png" className="img-fluid" alt=""/>
            </div>
            <div className="card">
                <h3>{t.repice3_title}</h3>
                <p>{t.recipe3_text}</p>
                <p>{t.recipe33_text}</p>
            </div>
        </div>
    </section>
    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/recipe3.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="card">
                <h3>{t.recipe0_title}</h3>
                <h4>{t.recipe4_title}</h4>
                <p>{t.recipe4_text}</p>
                <h4>{t.recipe5_title}</h4>
                <p>{t.recipe5_text}</p>
                <h4>{t.recipe6_title}</h4>
                <p>{t.recipe6_text}</p>
                <h4>{t.recipe7_title}</h4>
                <p>{t.recipe7_text}</p>
                <h4>{t.recipe8_title}</h4>
                <p>{t.recipe8_text}</p>
            </div>
        </div>
    </section>
        </MainLayout>
    )
}

export default Recipes