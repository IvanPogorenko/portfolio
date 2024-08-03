import {Link} from 'react-router-dom';
import '../css/header.css';

function Header() {
    return(
        <header>
            <img src='/img/logo.png' alt='logo'></img>
            <ul>
                <li>
                    <Link to='/' className='nav_link'>Главная</Link>
                </li>
                <li className='about'>
                    <h className='nav_link'>О нас</h>
                    <ul className='submenu'>
                        <li><Link to='/about-us/fabrics' className='nav_link bottom'>Ткани</Link></li>
                        <li><Link to='/about-us/brand' className='nav_link bottom'>Бренд</Link></li>
                        <li><Link to='/about-us/contacts' className='nav_link bottom'>Контакты</Link></li>
                    </ul>
                </li>
                <li className='catalog'>
                    <h className='nav_link'>Каталог</h>
                    <ul className='submenu'>
                        <li><Link to='/catalog' className='nav_link bottom'>Все&nbsp;товары</Link></li>
                        <li><Link to='' className='nav_link bottom'>Брюки</Link></li>
                        <li><Link to='' className='nav_link bottom'>Блузы</Link></li>
                        <li><Link to='' className='nav_link bottom'>Комбинезоны</Link></li>
                    </ul>
                </li>
                <li>
                    <Link to='how-to-order' className='nav_link'>Как заказать</Link>
                </li>
                <li>
                    <Link to='/registration' className='nav_link'>Регистрация</Link>
                </li>
            </ul>
        </header>
    );
}

export default Header;