import CardList from '../../components/category-card-list/category-card-list.component'

const Home = () => {
  const categories = [
    {
      id: '1',
      title: 'Hats',
      imageUrl: "https://images.unsplash.com/photo-1641403529911-0796df46fdc1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzEzfHxoYXRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: '2',
      title: 'Jackets',
      imageUrl: "https://images.unsplash.com/photo-1493568000180-ca2fb70ddcba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: '3',
      title: 'Mens',
      imageUrl: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fG1lbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: '4',
      title: 'Sneakers',
      imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c25lYWtlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: '5',
      title: 'Womens',
      imageUrl: "https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzN8fHdvbWVuc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
    }
  ]

  return (
    <CardList categories={categories} />
  );
}

export default Home;
