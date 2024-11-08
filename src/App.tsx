import Header from './common/layout/Header';
import ProductItem from './features/product/list-products/ui/ProductItem';

function App() {
  const onSubmit = () => alert('Search');

  const cartCount = 2;

  const product = {
    name: 'Product Test',
    picture: '',
    price: 10,
  };

  return (
    <>
      <Header onSubmit={onSubmit} cartCount={cartCount} />
      <ProductItem product={product} />
    </>
  );
}

export default App;
