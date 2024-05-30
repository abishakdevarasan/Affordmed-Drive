import React from 'react';
import ProductList from './ProductList';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Listing App</h1>
      </header>
      <main>
        <ProductList />
      </main>
    </div>
  );
};

export default App;
