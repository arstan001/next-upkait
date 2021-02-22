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
            <div className="card recipe">
                <h3>{t.recipe1_title}</h3>
                <p>{t.recipe1_ing}</p>
                <p>{t.recipe1_text1}</p>
                <p>{t.recipe1_text2}</p>
                <p>{t.recipe1_text3}</p>
                <p>{t.recipe1_text4}</p>
                <p>{t.recipe1_text5}</p>

            </div>
        </div>
    </section>
    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/recipe1.jpg" className="img-fluid"alt=""/>
            </div>
            <div className="card recipe">
                <h3>{t.recipe2_title}</h3>
                <p>{t.recipe2_ing}</p>
                <p>{t.recipe2_text1}</p>
                <p>{t.recipe2_text2}</p>
                <p>{t.recipe2_text3}</p>
                <p>{t.recipe2_text4}</p>

            </div>
        </div>
    </section>
    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/rabokki.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="card recipe">
                <h3>{t.recipe3_title}</h3>
                <p>{t.recipe3_text1}</p>
                <p>{t.recipe3_text2}</p>
                <p>{t.recipe3_text3}</p>
                <p>{t.recipe3_text4}</p>
            </div>
        </div>
    </section>
    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/recipe2.png" className="img-fluid" alt=""/>
            </div>
            <div className="card recipe">
                <h3>{t.recipe4_title}</h3>
                <p>{t.recipe4_text1}</p>
                <p>{t.recipe4_text2}</p>
                <p>{t.recipe4_text3}</p>
                <p>{t.recipe4_text4}</p>
            </div>
        </div>
    </section>
    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/kimchi.png" className="img-fluid" alt=""/>
            </div>
            <div className="card">
                <h3>{t.recipe0_title}</h3>
                <h5>{t.recipe01_title}</h5>
                <p>{t.recipe01_text}</p>
                <h5>{t.recipe02_title}</h5>
                <p>{t.recipe02_text}</p>
                <h5>{t.recipe03_title}</h5>
                <p>{t.recipe03_text}</p>
                <h5>{t.recipe04_title}</h5>
                <p>{t.recipe04_text}</p>
                <h5>{t.recipe05_title}</h5>
                <p>{t.recipe05_text}</p>
            </div>
        </div>
    </section>
        </MainLayout>
    )
}

export default Recipes