import CardList from '../../components/category-card-list/category-card-list.component'

const Home = () => {
  const categories = [
    {
      id: '1',
      title: 'Hats',
      imageUrl: "https://via.placeholder.com/2000/924442"
    },
    {
      id: '2',
      title: 'Hoodies',
      imageUrl: "https://via.placeholder.com/2000/745795"
    },
    {
      id: '3',
      title: 'Shirts',
      imageUrl: "https://via.placeholder.com/2000/993570"
    },
    {
      id: '4',
      title: 'Accessories',
      imageUrl: "https://via.placeholder.com/2000/243355"
    },
    {
      id: '5',
      title: 'Exclusive',
      imageUrl: "https://via.placeholder.com/2000/266355"
    }
  ]

  return (
    <CardList categories={categories} />
  );
}

export default Home;
