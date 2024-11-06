import Button from './common/design-system/Button';

function App() {
  return (
    <>
      <Button onClick={() => console.log('plop!')}>retirer du panier</Button>
      <Button variant="contained" onClick={() => console.log('Yeah!')}>
        Ajouter au panier
      </Button>
    </>
  );
}

export default App;
