import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard';
import ShoppingContext from './context/shopping-context';


function App() {

  const [productsCounter, setProductsCounter] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [favorites, setFavorites] = React.useState(0);

  const addToShoppingBag = (price) => {
    setProductsCounter(productsCounter + 1);
    setTotalPrice(totalPrice + price);
  }
  const addToFavorites = () =>{
    setFavorites(favorites + 1);
  }


  return (
    <div className="App">
      <ShoppingContext.Provider value={{productsCounter, totalPrice, favorites, addToShoppingBag, addToFavorites}}>
          <Dashboard />
      </ShoppingContext.Provider>
    </div>
  );
}

export default App;
