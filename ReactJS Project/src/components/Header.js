import {Link} from 'react-router-dom';
import '../css/header.css';

function Header() {
    return(
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <Link to='/' className='nav_link'>
                        <img src='/img/logo.png' alt='logo'></img>
                    </Link>
                </div>
                <nav className="navigation">
                    <ul className="menu">
                        <li className='about menu__item menu__item_margin'>
                            О нас
                            <ul className='submenu'>
                                <li className="menu__item">
                                    <Link to='/about-us/fabrics' className='nav_link bottom'>Ткани</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to='/about-us/brand' className='nav_link bottom'>Бренд</Link>
                                </li>
                                <li className="menu__item">
                                    <Link to='/about-us/contacts' className='nav_link bottom'>Контакты</Link>
                                </li>
                            </ul>
                        </li>
                        <li className='catalog menu__item menu__item_margin'>
                            Каталог
                            <ul className='submenu'>
                                <li className="menu__item"><Link to='/catalog'
                                                                 className='nav_link bottom'>Все&nbsp;товары</Link></li>
                                <li className="menu__item"><Link to='' className='nav_link bottom'>Брюки</Link></li>
                                <li className="menu__item"><Link to='' className='nav_link bottom'>Блузы</Link></li>
                                <li className="menu__item"><Link to='' className='nav_link bottom'>Комбинезоны</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item menu__item_margin">
                            <Link to='how-to-order' className='nav_link'>Как заказать</Link>
                        </li>
                    </ul>
                    <Link to='/registration' className='nav_link menu__item'>Регистрация</Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;