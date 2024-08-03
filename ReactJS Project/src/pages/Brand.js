import '../css/brand.css'
import InputBlock from '../components/InputBlock';
import GoToCatalog from '../components/GoToCatalog';
import { Link } from 'react-router-dom';

function Brand() {
    return(
        <>
            <div className='brandFirst'></div>
            <div className="inputLine">
                <h className='headForLine'>О бренде</h>
            </div>
            <div className='vertical'>
                <p className='text'>MOONPIE - магазин качественной и удобной медицинской одежды. Бренд самостоятельно производит одежду и предлагает как готовые модели, так и индивидуальный пошив по вашим меркам.</p>
                <img src='/img/Capture09218.png' alt='secondBlock' height={516} width={1087}></img>
            </div>
            <div className="inputLine">
                <h className='headForLine'>MOONPIE  —  с заботой о врачах</h>
            </div>
            <div className='vertical'>
                <p className='text'>Наша одежда предназначена для врачей различных специальностей, медицинских сестер, косметологов, массажистов и мастеров бьюти-индустрии.</p>
                <p className='text'>Людям таких специальностей важно не только чувствовать себя комфортно и свободно в рабочей одежде, но и выглядеть красиво и уверенно. Среди врачей встречаются девушки и женщины различного роста и телосложения. И так важно, чтобы чтобы каждая смогла найти для себя рабочую форму, которая будет идеально подходить именно ей.</p>
                <div className='brandFourth'>
                    <img src='/img/Rectangle21.png' alt='fourthBlock'></img>
                    <p>Кроме того, так как один из основателей бренда-врач, мы понимаем какие нюансы обязательно должны быть отражены в каждой моделе. </p>
                </div>
                <p className='text'>Например, каждая наша блуза имеет специальный маленький кармашек для зажима бейджа, чтобы не портить ткань булавкой. В каждой моделе детально проработана длина и строение рукавов для исключения скованности движений во время работы. А также мы подобрали идеальную ткань, которая достаточно плотная и изностокойкая, но в то же время эластичная и очень приятная к телу.</p>
                <div className='advantages'>
                    <img src='/img/Rectangle64.png' alt='advantage1'></img>
                    <img src='/img/Rectangle71.png' alt='advantage2'></img>
                    <img src='/img/Rectangle72.png' alt='advantage3'></img>
                </div>
            </div>
            <div className='wrapper'>
                <Link to='/catalog' className="catalogPath"><button className="catalogBtn">Перейти в каталог</button></Link>
            </div>
            <div className="inputLine">
                <h className='headForLine'>MOONPIE  —  бренд для каждого</h>
            </div>
            <div className='vertical'>
                <p className='text'>Одной из главных наших задач было показать как сидит форма на обычных девушках, разных типажей и ростов. Именно поэтому представляют нашу коллекцию обычные девушки, связанные с медициной.</p>
                <img src='/img/Capture2364.png' alt='lastBlock'></img>
            </div>
            <InputBlock></InputBlock>
            <GoToCatalog></GoToCatalog>
        </>
    );
}

export default Brand;