import Button from "../button/button.componenet";
import './product-card.styles.scss';
const ProductCard = ({ product }) => {
    const { name, imageUrl, price } = product;
    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'> {`$${price}`}</span>
            </div>
            <Button onClick={() => { }} buttonType={'default'}>Add to Cart</Button>
        </div>
    )
}
export default ProductCard;