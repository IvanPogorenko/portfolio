import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard"
import '../css/catalog.css';
import { getItemsByCategory } from "../api";

function Catalog() {

    const [categoryName, setCategoryName] = useState('');
    const[products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getItemsByCategory(categoryName);
                setProducts(products);
            } catch(error){
                console.log(error)
            }
        };
        fetchProducts();
    }, [categoryName])

    const handleCategorySelect = (category)  => {
        setCategoryName(category);
    }

    return(
        <div className="catalogWrapper">
            <div className="navigation">
                <h className="headLine">Каталог</h>
                <a className="catNav" href="#" onClick={() => handleCategorySelect('')}>Все товары</a>
                <a className="catNav" href="#" onClick={() => handleCategorySelect('Блуза')}>Блузы</a>
                <a className="catNav" href="#" onClick={() => handleCategorySelect('Брюки')}>Брюки</a>
                <a className="catNav" href="#" onClick={() => handleCategorySelect('Комбенизон')}>Комбинезоны</a>
            </div>
            <div className="cardsSection">
                <Link to="/cart">
                    <div className="cart">
                        <img src="img/cart.png" alt="cart_icon"></img>
                    </div>
                </Link>
                {<p></p>}
                <div className="Cards">
                    {products.map((obj)=>(
                        <ShopCard 
                        name={obj.name}
                        price={obj.price}
                        sizes={obj.size}
                        pictures={obj.photoUrl}
                        colors={obj.color}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Catalog;