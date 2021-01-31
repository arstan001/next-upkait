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
                <p>1. Разделить яичные белки и желтки, тонко сковородить и нарезать.<br/>
                    2. Налейте в кастрюлю 500 мл воды и вскипятите, снова отварите половину говяжьих палочек, положите
                    кнедлики и нарезанный картофель.<br/>
                    3. Когда клецки и нарезанный картофель будут готовы, добавьте зеленый лук, чеснок и перец.<br/>
                    4. Выложите его в миску и добавьте к нему яйцо.
                </p>
            </div>
        </div>
    </section>
    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/recipe1.jpg" className="img-fluid"alt=""/>
            </div>
            <div className="card">
                <h3>Карри</h3>
                <p><strong>Карри райсы (Кэрри райс/карэ райсу) </strong> <br/>
                    <strong>Ингредиенты:
                    </strong> Мясо 150 г (филе свинины, говядины, индейки или курицы) или морепродукты, приправа Оттоги
                    карри 100 г 1 шт, лук 1-2шт., картофель 3 шт, морковь 1 шт, растительное масло 30 г, 700 мл воды,
                    соль, перец по вкусу.<br/>
                    Приготовление: Фото-рецепт карри райс (кэрри райс/карэ райсу)
                    Мясо, лук, морковь, картофель нарежьте кубиками по полсантиметра.
                    Мясо обжарьте на растительном масле в глубокой сковороде, добавьте нарезанные овощи и продолжите
                    обжаривать.
                    Добавьте 500 мл воды в мясо с овощами и тушите на небольшом огне почти до готовности. Периодически
                    помешивайте.
                    Размешайте порошок карри 100 г в 200 мл холодной воды и влейте в тушеные овощи и мясо, тщательно
                    перемешайте и дотушите до полной готовности.<br/>
                    Выложите на тарелку горячий рис, полейте сверху карри райсом.
                    Приятного аппетита!

                </p>
            </div>
        </div>
    </section>
    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/recipe2.png" className="img-fluid" alt=""/>
            </div>
            <div className="card">
                <h3>Токпокки</h3>
                <p><strong>Ток-бокки c лапшой
                    </strong>(на 2 порции) <br/>
                    1. 200 г (2 пакета) рисовых лепешек промыть водой и удалить.<br/>
                    2. Налейте в кастрюлю 400 мл (2
                    стакана) воды и вскипятите.<br/>
                    3. Когда вода закипит, добавьте 1 лапшу рамен, 120 г (2 пакета) промытых
                    рисовых лепешек и соуса, 6 г (2 пакета) сушеных рыбных лепешек из пусана и кипятите 4-5 минут до
                    завершения.<br/>
                    Это вкусно, даже если вы любите вареные яйца, темпуру, различные виды рыбы и овощи на
                    свой вкус.

                </p>
                <p><strong>Ток-бокки с бульоном
                    </strong>(на 2 порции)<br/>
                    1. 300 г (2 пакета) рисовых лепешек промыть водой и удалить.<br/>
                    2. Налейте в кастрюлю 300 мл (1 и 1/2<br/>
                    стакана) воды и вскипятите его с промытым рисовым пирогом и соусом 120 г (2 пакета) и овощным
                    гарниром 4 г (2 пакета). <br/>
                    3. Хорошо перемешивайте в течение 5-6 минут, пока моти не станет мягким и
                    не готовым. <br/>
                    * Это вкусно, даже если вы добавите рыбный пирог, вареное яйцо, рамен / чольмён, темпуру
                    и т. Д. На свой вкус.

                </p>
            </div>
        </div>
    </section>
    <section className="recipes-main my-4">
        <div className="container grid">
            <div className="card bg-light p-3">
                <img src="./images/recipes/recipe3.jpg" className="img-fluid" alt=""/>
            </div>
            <div className="card">
                <h3>Как есть Порошковую приправу со вкусом кимчи </h3>
                <h4>Мяса</h4>
                <p>Сделайте надрез в середине и середине всей свиной грудинки. Обильно сбрызните оливковым маслом и
                    приправой для кимчи всю свиную грудинку и оберните все кулинарной фольгой. Выпекайте 15 минут при
                    температуре 165 градусов в аэрогриле, и готово!
                </p>
                <h4>Рамэн</h4>
                <p>Пряный Хэджанг Рамэн Возьмите 1/3 острого супа Haejang Ramen Ramen, который успокоит желудок на
                    следующий день после большого количества питья, и добавьте 1 столовую ложку приправы для кимчи.

                </p>
                <h4>Пицца и паста</h4>
                <p>Обязательно для тех, кто не может съесть более двух кусочков пиццы без солений. Если посыпать им
                    пиццу и пасту, ощущения НОЛЬ.
                </p>
                <h4>Тушеное мясо и жаркое
                </h4>
                <p>ОТушеное мясо и жаркое Когда тушеное мясо или горячий горшок станут хрустящими, приправа для кимчи
                    идеально подойдет для вкусной еды.
                </p>
                <h4>Куриная грудка</h4>
                <p>Куриная грудка для тех, кто придерживается диеты с низким содержанием танго и кито, соус с нулевой
                    калорийностью! Куриные грудки, которые были укушены и которые нельзя было есть, снова становятся
                    вкусными!

                </p>
            </div>
        </div>
    </section>
        </MainLayout>
    )
}

export default Recipes