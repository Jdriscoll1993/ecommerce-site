import './category-preview.styles.scss';
import ProductCard from '../product-card/product-card.component';
import { useNavigate } from 'react-router-dom';
const CategoryPreview = ({ title, products }) => {
    const navigate = useNavigate();

    const goToCategory = () => {
        navigate(`${title}`);
    }
    return (
        <div className='category-preview-container'>
            <div className='title'>
                <h1 onClick={goToCategory}>{title}</h1>
                <div className='preview'>
                    {products.filter((_, i) => i < 4)
                        .map((product) => {
                            return <ProductCard key={product.id} product={product} />
                        })}
                </div>
            </div>
        </div>

    );
}
export default CategoryPreview;