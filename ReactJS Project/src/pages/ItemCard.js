import { useLocation } from 'react-router-dom';
import '../css/shopCard.css';
import { addItemToCart } from '../api';

function ItemCard() {

    const location = useLocation()
    const {name, price, photo, sizes, colors, description} = location.state || "error data"

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const selectedSize = formData.get('size');
        const selectedColor = formData.get('color');
        try {
            await addItemToCart({
                itemName: name,
                size: selectedSize,
                color: selectedColor
            });
            alert('Item added to cart successfully!');
        } catch (error) {
            console.error('Error adding item to cart:', error);
            alert('Failed to add item to cart.');
        }
    }
       

    return(
        <div className="ItemCardContainer">
            <div className='ItemCard'>
                <div className='PictureBlock'>
                    <img src={photo} alt='itemPicture'></img>
                </div>
                <div className='InfoBlock'>
                    <h className='name'>{name}</h>
                    <p>{price}</p>
                    <form onSubmit={handleSubmit}>
                        <p>Цвет:</p>
                        <div className='RadioGroup'>
                            <div>
                                <input type="radio" className="input_data" name="color" value={colors[0]} />
                                <label>{colors[0]}</label>
                            </div>
                            <div>
                                <input type="radio" className="input_data" name="color" value={colors[1]}/>
                                <label>{colors[1]}</label>
                            </div>
                            <div>
                                <input type="radio" className="input_data" name="color" value={colors[2]}/>
                                <label>{colors[2]}</label>
                            </div>
                            <div>
                                <input type="radio" className="input_data" name="color" value={colors[3]}/>
                                <label>{colors[3]}</label>
                            </div>
                        </div>
                        <p>Размер:</p>
                        <div className='RadioGroup'>
                            <div>
                                <input type="radio" className="input_data" name="size" value={sizes[0]} />
                                <label>{sizes[0]}</label>
                            </div>
                            <div>
                                <input type="radio" className="input_data" name="size" value={sizes[1]}/>
                                <label>{sizes[1]}</label>
                            </div>
                            <div>
                                <input type="radio" className="input_data" name="size" value={sizes[2]}/>
                                <label>{sizes[2]}</label>
                            </div>
                            <div>
                                <input type="radio" className="input_data" name="size" value={sizes[3]}/>
                                <label>{sizes[3]}</label>
                            </div>
                        </div>
                        <p>{description}</p>
                        <button className='addToCartBtn' type='submit'>Добавить в карзину</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;