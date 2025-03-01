import '../css/cart.css';

function CartReviewComponent(props) {
    return(
        <div className='HeaderInfo'>
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    );
}

export default CartReviewComponent;

