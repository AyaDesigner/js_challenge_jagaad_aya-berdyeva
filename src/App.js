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

  const removeProductFromFavorites = (product) => {
    console.log("hey")
    setProductsInFavorites(productsInFavorites.filter(favoriteProduct => favoriteProduct.uuid !== product.uuid));
  }


  return (
    <div className="App">
      <ShoppingContext.Provider value={{productsInShoppingBag, productsInFavorites, addToShoppingBag, addToFavorites, removeProductFromFavorites}}>
          <Dashboard />
      </ShoppingContext.Provider>
    </div>
  );
}

export default App;
