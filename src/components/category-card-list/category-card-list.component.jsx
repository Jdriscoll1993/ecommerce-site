import './category-card-list.styles.scss';
import Card from '../category-card/category-card.component'

const CardList = ({ categories }) => {
    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <Card key={category.id} category={category} />
            ))}
        </div>)
}

export default CardList