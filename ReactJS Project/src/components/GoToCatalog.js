import '../css/catalogPath.css'
import { Link } from 'react-router-dom';


function GoToCatalog(){
    return(
        <>
            <div className="catalogPath">
                <p>С любовью и заботой к вам и вашей деятельности,</p>
                <p>MOONPIE</p>
            </div>
            <div className='wrapper'>
                <Link to='/catalog' className="catalogPath"><button className="catalogBtn">Перейти в каталог</button></Link>
            </div>
        </>
    );
};

export default GoToCatalog;