import { Link } from "react-router-dom";
import InputBlock from '../components/InputBlock'
import '../css/home.css';

function Home() {
    return(
        <>
            <section className="main-page__first-block">
                <h className='main-title main-page__main-title'>Стильная и комфортная медицинская одежда</h>
                <button className="btn"><Link to='/catalog' className="nav_link">Перейти в каталог</Link></button>
            </section>
            <section className="about-catalog">
                <div className="container about-catalog__container">
                    <h className="main-title">Каталог</h>
                    <div className="about-catalog__cards">
                        <div className="about-catalog__card">
                            <Link to="#" className='nav_link'>
                                <img src="/img/bruki.png" alt="trousers"/>
                            </Link>
                        </div>
                        <div className="about-catalog__card">
                            <Link to="#" className="nav_link">
                                <img src="/img/bluzi.png" alt="blouse"/>
                            </Link>
                        </div>
                        <div className="about-catalog__card">
                            <Link to="#" className="nav_link">
                                <img src="/img/combinezoni.png" alt="overalls"/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <InputBlock/>
            <section className="benefits">
                <div className="container">
                    <h className="main-title">Почему вы выбираете нас</h>
                    <div className="benefits__benefits-cards">
                        <div className="benefits__benefit-card">
                            <div className="benefits__benefit-image">
                                <img src="/img/shit.svg" alt="shit"/>
                            </div>
                            <div className="benefits__benefit-info">
                                Шьем по индивидуальным меркам
                            </div>
                        </div>
                        <div className="benefits__benefit-card">
                            <div className="benefits__benefit-image">
                                <img src="/img/dostavca.svg" alt="dostavca"/>
                            </div>
                            <div className="benefits__benefit-info">
                                Доставка по всей России
                            </div>
                        </div>
                        <div className="benefits__benefit-card">
                            <div className="benefits__benefit-image">
                                <img src="/img/primerca.svg" alt="primerca"/>
                            </div>
                            <div className="benefits__benefit-info">
                                Примерка перед покупкой
                            </div>
                        </div>
                        <div className="benefits__benefit-card">
                            <div className="benefits__benefit-image">
                                <img src="/img/proiz.svg" alt="proiz"/>
                            </div>
                            <div className="benefits__benefit-info">
                                Собственное производство
                            </div>
                        </div>
                    </div>
                    <div className="about-page">
                        <Link to='/about-us/brand' className="nav_link about-page__link">Подробнее о нас</Link>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;