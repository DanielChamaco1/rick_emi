import { SearchBar } from './SearchBar';
import { ProductTable } from './ProductTable'
import { SearchContext } from '../context/Serchconstext';
import '../styles/App.css';
import { useContext } from 'react';

function App() {
  const {}=useContext(SearchContext)

  return (
    <section className='filterable-product-table'>
      <SearchBar />
      <ProductTable />
    </section>

  );
}

export default App;
