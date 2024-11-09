import Header from './common/layout/Header';

import ProductList from './features/product/list-products/ui/ProductList';
import { ProductItemData } from './features/product/list-products/ui/ProductList/types';

function App() {
  const onSubmit = () => alert('Search');

  const cartCount = 2;

  const products: ProductItemData[] = [
    {
      id: '1',
      name: 'Mobile phone',
      picture: '',
      price: 1000,
    },
    {
      id: '2',
      name: 'Laptop',
      picture: '',
      price: 1500,
    },
    {
      id: '3',
      name: 'Tablet',
      picture: '',
      price: 500,
    },
  ];

  return (
    <>
      <Header onSubmit={onSubmit} cartCount={cartCount} />
      <ProductList products={products} />
    </>
  );
}

export default App;
