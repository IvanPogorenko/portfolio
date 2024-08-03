import '../css/fabrics.css'
import InputBlock from '../components/InputBlock'
import GoToCatalog from '../components/GoToCatalog';

function Fabrics() {
    return(
        <>
            <div className="pictureBlock"></div>
            <div className="inputLine">
                <h className='headForLine'>О тканях</h>
            </div>
            <div className='fabrics'>
                <p>Любое изделие MOONPIE можно заказать в понравившемся цвете из предложенной палитры. Наша ткань достаточно износостойкая, плотная, но в ней не жарко. Она держит форму, подчеркивая фигуру. Приятная к телу. Эластичная, не сковывает движения. Практически не мнется.</p>
                <div className='colors'>
                    <div className='mint'>
                        <div className='color'>Мята</div>
                    </div>
                    <div className='graphit'>
                        <div className='color'>Графит</div>
                    </div>
                    <div className='darkBlue'>
                        <div className='color'>Темно-синий</div>
                    </div>
                    <div className='white'>
                        <div className='color'>Белый</div>
                    </div>
                    <div className='blue'>
                        <div className='color'>Голубой</div>
                    </div>
                </div>
            </div>
            <div className='fabricComposition'>
                <h>Состав ткани</h>
                <div className='wrapper'>
                    <ul className='composition'>
                        <li>72% полиэстер</li>
                        <li>22% вискоза</li>
                        <li> 6% спандекс</li>
                        <li>Плотность ткани: 300г</li>
                    </ul>
                    <img src='/img/comp.png' alt='composition'></img>
                </div>
            </div>
            <div className='fabricCare'>
                <h>Уход за тканью</h>
                <p>Максимальная температура стирки 40 °C<br></br>Гладить при температуре не выше 150 °C<br></br>Не отбеливать ткань<br></br>Стирать с вещами в одной цветовой гамме</p>
            </div>
            <InputBlock></InputBlock>
            <GoToCatalog></GoToCatalog>
        </>
    );
}

export default Fabrics;