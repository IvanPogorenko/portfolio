import '../css/fabrics.css'
import InputBlock from '../components/InputBlock'
import GoToCatalog from '../components/GoToCatalog';

function Fabrics() {
    return(
        <>
            <section className="fabrrics-first-block"></section>
            <div className="input-line">
                <h className='main-title'>О тканях</h>
            </div>
            <section className="fabrics">
                <div className="container fabrics__container">
                    <p className="text fabrics__text">Любое изделие MOONPIE можно заказать в понравившемся цвете из предложенной палитры. Наша ткань достаточно износостойкая, плотная, но в ней не жарко.
                        Она держит форму, подчеркивая фигуру.
                        Приятная к телу.
                        Эластичная, не сковывает движения. Практически не мнется.</p>
                    <div className="fabrics__cards">
                        <div className='fabrics__card mint'>
                            <div className='fabrics__color-name'>Мята</div>
                        </div>
                        <div className='fabrics__card graphite'>
                            <div className='fabrics__color-name'>Графит</div>
                        </div>
                        <div className='fabrics__card dark-blue'>
                            <div className='fabrics__color-name'>Темно-синий</div>
                        </div>
                        <div className='fabrics__card white'>
                            <div className='fabrics__color-name'>Белый</div>
                        </div>
                        <div className='fabrics__card blue'>
                            <div className='fabrics__color-name'>Голубой</div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-fabrics">
                <div className="container about-fabrics__container">
                    <div className="about-fabrics__info-block">
                        <h className="small-title">Состав ткани</h>
                        <div className="about-fabrics__fabrics-composition">
                            <div className="fabrics-composition__info">
                                <ul className='list'>
                                    <li className="list__item text">72% полиэстер</li>
                                    <li className="list__item text">22% вискоза</li>
                                    <li className="list__item text">6% спандекс</li>
                                    <li className="list__item text">Плотность ткани: 300г</li>
                                </ul>
                            </div>
                            <div className="fabrics-composition__image">
                                <img src="/img/comp.png" alt="composition"/>
                            </div>
                        </div>
                    </div>
                    <div className="about-fabrics__info-block">
                        <h className="small-title">Уход за тканью</h>
                        <ul className='list'>
                            <li className="list__item text">Максимальная температура стирки 40 °C</li>
                            <li className="list__item text">Гладить при температуре не выше 150 °C</li>
                            <li className="list__item text">Не отбеливать ткань</li>
                            <li className="list__item text">Стирать с вещами в одной цветовой гамме</li>
                        </ul>
                    </div>
                </div>
            </section>
            <InputBlock></InputBlock>
            <GoToCatalog></GoToCatalog>
        </>
    );
}

export default Fabrics;