import '../card-list/card-list.styles.scss';
import Card from '../card/card.component'

const CardList = ({ categories }) => {
    return (
        <div className='categories-container'>
            {categories.map((category) => (
                <Card key={category.id} category={category} />
            ))}

        </div>)
}

export default CardList