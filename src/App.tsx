import ProductSearch from './features/product/search-products/ui/ProductSearch';

function App() {
  const onSubmit = () => alert('Search');
  return (
    <div className="mt-3">
      <ProductSearch onSubmit={onSubmit} />
    </div>
  );
}

export default App;
