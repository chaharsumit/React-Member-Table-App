import Hero from './Hero';
import Filter from './Filter';
import Table from './Table';

function Home(props) {

  return (
    <div className="container">
      <Hero />
      <Filter />
      <Table />
    </div>
  );
}

export default Home;