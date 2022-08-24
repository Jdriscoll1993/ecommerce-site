import './category-preview.styles.scss';
import ProductCard from '../../components/product-card/product-card.component';

const CategoryPreview = ({ title, products }) => {

    return (
        <div className='category-preview-container'>
            <div className='title'>
                <h1>{title}</h1>
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