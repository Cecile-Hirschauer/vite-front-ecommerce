import AddCartButton from './features/cart/add-cart-product/ui/AddCartButton';

function App() {
  const addToCart = (): void => {
    alert('call API pour ajouter le produit au panier côté serveur');
  };
  return <AddCartButton addToCart={addToCart} />;
}

export default App;
