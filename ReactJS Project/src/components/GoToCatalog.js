import '../css/catalogPath.css'
import { Link } from 'react-router-dom';


function GoToCatalog(){
    return(
        <>
            <section className="catalog-path">
                <div className="catalog-path__container">
                    <div className="catalog-path__text-container">
                        <div className="small-title catalog-path__text">
                            С любовью и заботой к вам и вашей деятельности, MOONPIE
                        </div>
                    </div>
                    <Link to='/catalog' className="nav_link"><button className="catalog-path__btn">Перейти в каталог</button></Link>
                </div>
            </section>
        </>
    );
}

export default GoToCatalog;