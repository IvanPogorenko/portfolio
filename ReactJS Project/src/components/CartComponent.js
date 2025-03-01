import { useState } from 'react';
import '../css/cart.css';

function CartComponent(props) {

    const [count, setCount] = useState(1)
    const singlePrice = Number(props.price)
    const [price, setPrice] = useState(Number(singlePrice))

    return(
        <div className='cart-component'>
            <div className='imgContainer'>
                <img src={props.picture} alt='ItemImg' width="200"></img>
            </div>
            <div className='ItemInfo'>
                <div className='HeaderInfo'>
                    <p>{props.name}</p>
                    <p>{price}</p>
                </div>
                <p>Цвет: {props.color}</p>
                <p>Размер: {props.size}</p>
                <div className='CountUpdate'>
                    <button id='BtnMinus' onClick={() => {
                        if(count != 1){
                            setCount(count - 1)
                            setPrice(price-singlePrice)
                        }
                    }}>-</button>
                    <input className='ItemCount' type="number" name="ItemName" value={count}></input>
                    <button id='BtnPlus' onClick={() => {
                        setCount(count + 1)
                        setPrice(price+singlePrice)
                    }}>+</button>
                </div>
            </div>
        </div>
    );
}

export default CartComponent;