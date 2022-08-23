import './category-card.styles.scss';
import { useNavigate } from 'react-router-dom';
const Card = ({ category }) => {

    const navigate = useNavigate();

    const { imageUrl, title } = category;
    const goToClothing = () => navigate(`/shop/${title}`)
    return (
        <div className='category-container'>
            <div
                className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className='category-body-container'>
                <h2 onClick={goToClothing}>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>)
}
export default Card;