import AddCartButton from './features/cart/add-cart-product/ui/AddCartButton';
import RemoveCartButton from './features/cart/remove-cart-product/ui/RemoveCartButton';

function App() {
  const addToCart = (): void => {
    alert('call API pour ajouter le produit au panier côté serveur');
  };

  const removeFromCart = (): void => {
    alert('remove from cart');
  };
  return (
    <>
      <AddCartButton addToCart={addToCart} />
      <RemoveCartButton removeFromCart={removeFromCart} />
    </>
  );
}

export default App;
