import { Link, useNavigate } from 'react-router-dom';
import '../css/cart.css';
import CartComponent from '../components/CartComponent';
import CartReviewComponent from '../components/CartReviewComponent';
import { useEffect, useState } from 'react';
import { showItems } from '../api';

function Cart(){

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [totalPrise, setTotalPrice] = useState(0)

    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const items = await showItems();
                setCartItems(items);
            } catch (error) {
                setError('Failed to fetch cart items');
            } finally {
                setLoading(false);
            }
        };

        fetchCartItems();
    }, []);

    return(
        <>
            <div className="inputLine">
                <h className='headForLine'>О тканях</h>
            </div>
            <div className='cartHeadContainer'>
                <div className="cartContainer">
                    {cartItems.length == 0? (
                        <h>Ваша корзина пока что пуста</h>
                    ):(
                        <>
                            <div className='cartComponents'>
                            {cartItems.map((obj)=>(
                                    <CartComponent 
                                    name={obj.name}
                                    price={obj.finalPrice}
                                    size={obj.size}
                                    picture={obj.photoUrl}
                                    color={obj.color}
                                    />
                                ))}
                            </div>
                            <div className='cartReview'>
                                <h>Сумма заказа</h>
                                {cartItems.map((obj)=>(
                                        <CartReviewComponent 
                                        name={obj.name}
                                        price={obj.finalPrice}
                                        />
                                ))}
                                <div className='Line'></div>
                                <Link to='/makeOrder'><button className='MakeOrder'>Оформить заказ</button></Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}

export default Cart;