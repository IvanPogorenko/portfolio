import { Link, useLocation } from 'react-router-dom';
import '../css/cart.css';
import '../css/order.css';
import CartComponent from '../components/CartComponent';
import CartReviewComponent from '../components/CartReviewComponent';
import { useEffect, useState } from 'react';
import { makeOrder, showItems } from '../api';

function Order(){

    const [formData, setFormData] = useState({
        fullName: '',
        city: '',
        address: '',
        phone: '',
    });

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        try {
            const request = await makeOrder(formData.fullName, formData.city, formData.address, formData.phone);
            alert("You made the order")
        } catch (error) {
            alert("Error!")
            setError(error.message);
        }
    };

    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorGet, setErrorGet] = useState(null);
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
        <div className='cartHeadContainer'>
            <div className='cartContainer'>
                <div className='OrderForm'>
                    <form onSubmit={handleSubmit} className='RegBlock'>
                        <div className='FormFieldContainer'>
                            <label className='FormField'>
                                ФИО:
                                <input
                                    className='textBlock'
                                    type="text"
                                    name="fio"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className='FormFieldContainer'>
                            <label className='FormField'>
                                Город:
                                <input
                                    className='textBlock'
                                    type="text"
                                    name="city"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className='FormFieldContainer'>
                            <label className='FormField'>
                                Адрес СДЭК:
                                <input
                                    className='textBlock'
                                    type="text"
                                    name="address"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className='FormFieldContainer'>
                            <label className='FormField'>
                                Номер телефона:
                                <input
                                    className='textBlock'
                                    type="text"
                                    name="phone"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </label>
                        </div>
                        <button className='MakeOrder' type="submit">Оформить</button>
                    </form>
                </div>
                <div className='cartReview'>
                    <h>Ваш заказ</h>
                    {console.log(123, cartItems)}
                    {cartItems.map((obj)=>(
                            <CartReviewComponent 
                            name={obj.name}
                            price={obj.finalPrice}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Order;