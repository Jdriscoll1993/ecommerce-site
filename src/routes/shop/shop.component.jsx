import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../../routes/categories-preview/categories-preview.component'
import { CategoriesContext } from "../../contexts/categories.context";
import './shop.styles.scss';
const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
        </Routes>
    );
}
export default Shop;