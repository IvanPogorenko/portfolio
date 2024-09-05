import '../css/brand.css'
import InputBlock from '../components/InputBlock';
import GoToCatalog from '../components/GoToCatalog';
import {Link} from 'react-router-dom';

function Brand() {
    return (
        <>
            <section className='brand-first-block'></section>
            <div className="input-line">
                <h className='main-title'>О бренде</h>
            </div>
            <section className="about-brand">
                <div className="about-brand__container">
                    <div className="text about-brand__text">MOONPIE - магазин качественной и удобной медицинской одежды.
                        Бренд
                        самостоятельно производит одежду и предлагает как готовые модели, так и индивидуальный пошив по
                        вашим меркам.
                    </div>
                    <div className="about-brand__image">
                        <img src="/img/Capture09218.png" alt="brand"/>
                    </div>
                </div>
            </section>
            <div className="input-line">
                <h className='main-title'>MOONPIE — с заботой о врачах</h>
            </div>
            <section className="company">
                <div className="company__container">
                    <div className="company__text text">Наша одежда предназначена для врачей различных специальностей,
                        медицинских сестер, косметологов, массажистов и мастеров бьюти-индустрии.
                    </div>
                    <div className="company__text text">Людям таких специальностей важно не только чувствовать себя
                        комфортно и свободно в рабочей одежде, но и выглядеть красиво и уверенно. Среди врачей
                        встречаются девушки и женщины различного роста и телосложения. И так важно, чтобы чтобы каждая
                        смогла найти для себя рабочую форму, которая будет идеально подходить именно ей.
                    </div>
                    <div className="company__info-group">
                        <div className="company__group-image">
                            <img src="/img/Rectangle21.png" alt="company"/>
                        </div>
                        <div className="company__group-info text">
                            Кроме того, так как один из основателей бренда-врач, мы понимаем какие нюансы обязательно
                            должны быть отражены в каждой моделе.
                        </div>
                    </div>
                    <div className="company__text text">
                        Например, каждая наша блуза имеет специальный маленький кармашек для зажима бейджа, чтобы не
                        портить ткань булавкой. В каждой моделе детально проработана длина и строение рукавов для
                        исключения скованности движений во время работы. А также мы подобрали идеальную ткань, которая
                        достаточно плотная и изностокойкая, но в то же время эластичная и очень приятная к телу.
                    </div>
                    <div className="company__details">
                        <div className="company__detail">
                            <img src='/img/Rectangle64.png' alt='advantage1'></img>
                        </div>
                        <div className="company__detail">
                            <img src='/img/Rectangle71.png' alt='advantage2'></img>
                        </div>
                        <div className="company__detail">
                            <img src='/img/Rectangle72.png' alt='advantage3'></img>
                        </div>
                    </div>
                    <Link to='/catalog' className="nav_link">
                        <button className="catalog-path__btn">Перейти в каталог</button>
                    </Link>
                </div>
            </section>
            <div className="input-line">
                <h className='main-title'>MOONPIE — бренд для каждого</h>
            </div>
            <section className="for-everyone">
                <div className="for-everyone__container">
                    <div className="for-everyone__text text">
                        Одной из главных наших задач было показать как сидит форма на обычных девушках, разных типажей и
                        ростов. Именно поэтому представляют нашу коллекцию обычные девушки, связанные с медициной.
                    </div>
                    <div className="for-everyone__image">
                        <img src='/img/Capture2364.png' alt='lastBlock'></img>
                    </div>
                </div>
            </section>
            {/*<div className='vertical'>*/}
            {/*    <p className='text'>Одной из главных наших задач было показать как сидит форма на обычных девушках, разных типажей и ростов. Именно поэтому представляют нашу коллекцию обычные девушки, связанные с медициной.</p>*/}
            {/*    <img src='/img/Capture2364.png' alt='lastBlock'></img>*/}
            {/*</div>*/}
            <InputBlock></InputBlock>
            <GoToCatalog></GoToCatalog>
        </>
    );
}

export default Brand;