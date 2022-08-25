import './category-card-list.styles.scss';
import CategoryCard from '../category-card/category-card.component'
import { UserContext } from '../../contexts/user.context';
import { useContext } from 'react';

const CategoryCardList = ({ categories }) => {
    const user = useContext(UserContext);

    return (
        <div>
            <h1 style={{ textAlign: 'center' }}> {user.currentUser ? 'Welcome ' + user.currentUser.email : ''} </h1>
            <div className='categories-container'>
                {categories.map((category) => (
                    <CategoryCard key={category.id} category={category} />
                ))}
            </div>
        </div>
    )
}

export default CategoryCardList