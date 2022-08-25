import './category-card.styles.scss';
import { useNavigate } from 'react-router-dom';
const CategoryCard = ({ category }) => {

    const navigate = useNavigate();

    const { imageUrl, title } = category;
    const goToClothing = () => navigate(`/shop/${title.toLowerCase()}`)
    return (
        <div className='category-container'>
            <div
                className='background-image'
                style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div onClick={goToClothing} className='category-body-container'>
                <h2 >{title}</h2>
                <p >Shop Now</p>
            </div>
        </div>)
}
export default CategoryCard;