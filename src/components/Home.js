import Hero from './Hero';
import Filter from './Filter';
import Table from './Table';

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Filter />
      <Table />
    </div>
  );
}