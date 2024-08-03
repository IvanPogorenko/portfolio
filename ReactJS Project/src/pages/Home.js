import { Link } from "react-router-dom";
import InputBlock from '../components/InputBlock'
import '../css/home.css';

function Home() {
    return(
        <>
            <div className="firstBlock">
                <h>Стильная и комфортная<br></br>медицинская одежда</h>
                <button className="goToCatalog"><Link to='/catalog' className="nav_link">Перейти в каталог</Link></button>
            </div>
            <h className="headLine">Каталог</h>
            <div className="secondBlock">
                <div className="catalogPicture trousers">
                    <p>Штаны</p>
                </div>
                <div className="catalogPicture blouse">
                    <p>Блузы</p>
                </div>
                <div className="catalogPicture overalls">
                    <p>Комбинезоны</p>
                </div>
            </div>
            <InputBlock/>
            <h className="headLine">Почему вы выбираете нас</h>
            <div className="whyUs">
                <div className="whyUsItems">
                    <div className="whyUsItem">
                        <img src="/img/shit.svg" alt="shit"></img>
                        <p>Шьем по индивидуальным меркам</p>
                    </div>
                    <div className="whyUsItem">
                        <img src="/img/primerca.svg" alt="primerca"></img>
                        <p>Примерка перед<br></br>покупкой</p>
                    </div>
                </div>
                <div className="whyUsItems">
                    <div className="whyUsItem">
                        <img src="/img/dostavca.svg" alt="dostavka"></img>
                        <p>Доставка по всей<br></br>России</p>
                    </div>
                    <div className="whyUsItem">
                        <img src="/img/proiz.svg" alt="proiz"></img>
                        <p>Собственное<br></br>производство</p>
                    </div>
                </div>
            </div>
            <p><Link to='/about-us/brand' className="nav_link_about">Подробнее о нас</Link></p>
        </>
    );
}

export default Home;