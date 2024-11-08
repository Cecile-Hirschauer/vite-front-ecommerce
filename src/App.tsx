import Header from './common/layout/Header';

function App() {
  const onSubmit = () => alert('Search');

  const cartCount = 2;

  return <Header onSubmit={onSubmit} cartCount={cartCount} />;
}

export default App;
