import { useContext } from 'react';
import CategoryPreview from '../category-preview/category-preview.component';
import { CategoriesContext } from "../../contexts/categories.context";
import './shop.styles.scss';
const Shop = () => {

    const { categoriesMap } = useContext(CategoriesContext);

    return (
        Object.keys(categoriesMap).map(title => {
            const products = categoriesMap[title];
            return <CategoryPreview key={title} title={title} products={products} />
        }
        ));
}
export default Shop;