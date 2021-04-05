import './App.css';
import React, {useState} from 'react';
import Dashboard from './components/Dashboard';
import ShoppingContext from './context/shopping-context';


function App() {

  const [productsInShoppingBag, setProductsInShoppingBag] = useState([]);
  const [productsInFavorites, setProductsInFavorites] = useState([]);

  const addToShoppingBag = (product) => {
    const copyOfProductsInShoppingBag = [...productsInShoppingBag];
    copyOfProductsInShoppingBag.push(product);
    setProductsInShoppingBag(copyOfProductsInShoppingBag);
  }
  const addToFavorites = (product) => {
    const copyOfProductsInFavorites = [...productsInFavorites];
    copyOfProductsInFavorites.push(product);
    setProductsInFavorites(copyOfProductsInFavorites);
  }

  const removeFromShoppingBag = (product) => {
    setProductsInShoppingBag(productsInShoppingBag.filter(productInBag => productInBag.uuid !== product.uuid))

  }

  const removeProductFromFavorites = (product) => {
    setProductsInFavorites(productsInFavorites.filter(favoriteProduct => favoriteProduct.uuid !== product.uuid));
  }


  return (
    <div className="App">
      <ShoppingContext.Provider value={{productsInShoppingBag, productsInFavorites, addToShoppingBag, addToFavorites, removeFromShoppingBag, removeProductFromFavorites}}>
          <Dashboard />
      </ShoppingContext.Provider>
    </div>
  );
}

export default App;
