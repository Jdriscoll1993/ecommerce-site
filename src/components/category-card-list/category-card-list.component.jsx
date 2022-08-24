import './category-card-list.styles.scss';
import Card from '../category-card/category-card.component'

const CategoryCardList = ({ categories }) => {
    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <Card key={category.id} category={category} />
            ))}
        </div>)
}

export default CategoryCardList