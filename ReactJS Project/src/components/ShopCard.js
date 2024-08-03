import { Link, useNavigate } from 'react-router-dom';
import '../css/catalog.css';
import { getItemByName } from '../api';

function ShopCard(props){

    const navigate = useNavigate()

    const handleClick = async () => {
        try {
            const itemData = await getItemByName(props.name);
            navigate("/cloth/item", {
                state: {
                    name: itemData.name,
                    price: itemData.price,
                    photo: itemData.photoUrl,
                    sizes: itemData.sizes,
                    colors: itemData.colors,
                    description: itemData.description
                }
            });
        } catch (error) {
            console.error('Error fetching item data:', error);
        }
    };

    return(
        <div className="Card" onClick={handleClick}>
            <div className='ProductImageContainer'>
                <img src={props.pictures} alt={props.name}></img>
            </div>
            <div className="Descr">
                <h className="name">{props.name}</h>
                <p className='other' >Размеры: {props.sizes.join(', ')}</p>
                <p className='other' >Цена: {props.price}</p>
                <p className='other' >Цвета: {props.colors.join(', ')}</p>
            </div>
        </div>
    );
}

export default ShopCard;